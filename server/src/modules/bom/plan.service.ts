import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { FindOneOptions } from 'typeorm/find-options/FindOneOptions';
import { FindConditions } from 'typeorm/find-options/FindConditions';
import { SearchFindCondition } from '../../misc/findcondition';
import { BomItem } from '../../entities/bomitem.entity';
import { History } from '../../entities/history.entity';
import { Inventory } from '../../entities/inventory.entity';
import { HistoryService } from '../history/history.service';
import { InventoryService } from '../inventory/inventory.service';

@Injectable()
export class BomPlanService {
  // i: number;
  constructor(
    @Inject('BomPlanRepositoryToken')
    protected bRepository: Repository<BomItem>,
    @Inject('HistoryRepositoryToken')
    protected hRepository: Repository<History>,
    protected hService: HistoryService,
    @Inject('InventoryRepositoryToken')
    protected iRepository: Repository<Inventory>,
    protected iService: InventoryService,
  ) {}

  public async find(type: string, term: string): Promise<BomItem> {
    switch (type) {
      case 'jno':
      case 'mno':
        return this.findByJMno(type, term);
      default:
        return this.findByInv(type, term);
    }
  }
  public async findByInv(type: string, term: string): Promise<BomItem> {
    // const strWhere = `${type}=:cond`;
    const inv = await this.iService.findOne(type, term);
    if (inv) {
      const invcode = inv.cinvcode;
      return await this.getBom(invcode);
    } else {
      return null;
    }
  }

  public async findByJMno(type: string, term: string): Promise<BomItem> {
    const his = await this.hService.findOne(type, term);
    if (his && his.inventory) {
      const invcode = his.inventory.cinvcode;
      return await this.getBom(invcode);
    } else {
      return null;
    }
  }

  public async getBom(invcode: string): Promise<BomItem> {
    let parent: BomItem = await this.bRepository
      .createQueryBuilder('b')
      .leftJoinAndSelect('b.inv', 'pinv')
      .leftJoinAndSelect('b.routings', 'pr')
      .leftJoinAndSelect('pinv.rdsins', 'rds')
      .where('pinv.cinvcode=:cond')
      .andWhere('b.parentbomid =0')
      .orderBy('pr.opseq')
      .setParameters({ cond: invcode })
      .getOne();
    // parent.qty = 2;
    if (parent && parent.childbomid) {
      parent = await this.getChildren(parent);
    }

    return parent;
  }
  protected async getChildren(parent: BomItem): Promise<BomItem> {
    const children = await this.bRepository
      .createQueryBuilder('b')
      .select()
      .leftJoinAndSelect('b.inv', 'pinv')
      .leftJoinAndSelect('b.routings', 'pr')
      .leftJoinAndSelect('pinv.rdsins', 'rds', 'rn < 11')
      .where('b.parentbomid=:bomid', { bomid: parent.childbomid })
      .orderBy('b.id,pr.opseq')
      .getMany();

    const newChildren = children.map(async child => {
      child.qty = child.unitqty * parent.qty;
      child.lvl = parent.lvl + '.' + child.lvl;
      if (child.childbomid) {
        child = await this.getChildren(child);
      }
      return child;
    });
    await Promise.all(newChildren).then(childrenTree => {
      parent.children = childrenTree;
    });
    return parent;
  }
}

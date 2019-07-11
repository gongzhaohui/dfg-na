import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { FindOneOptions } from 'typeorm/find-options/FindOneOptions';
import { FindConditions } from 'typeorm/find-options/FindConditions';
import { SearchFindCondition } from 'misc/findcondition';
import { BomItem } from '../../entities/bomitem.entity';
import { History } from '../../entities/history.entity';
import { Inventory } from '../../entities/inventory.entity';

@Injectable()
export class BomPlanService {
  // i: number;
  constructor(
    @Inject('BomPlanRepositoryToken')
    protected bRepository: Repository<BomItem>,
    @Inject('HistoryRepositoryToken')
    protected hRepository: Repository<History>,
    @Inject('InventoryRepositoryToken')
    protected iRepository: Repository<Inventory>,
  ) {}

  public async find(
    conditions: FindConditions<SearchFindCondition>,
    options?: FindOneOptions<BomItem>,
  ): Promise<BomItem> {
    const type = conditions.type;
    switch (type) {
      case 'jno':
        return this.findByJno(conditions);
      case 'mno':
        return this.findByJno(conditions);
      default:
        return this.findByInv(conditions);
    }
  }
  public async findByInv(
    conditions: FindConditions<SearchFindCondition>,
  ): Promise<BomItem> {
    // console.log('search by inv');
    const inv = await this.iRepository
      .createQueryBuilder('')
      .where('cinvcode=:cond')
      .orWhere('cinvaddcode=:cond')
      .orWhere('cinvstd=:cond')
      .setParameters({ cond: conditions.term })
      .getOne();
    if(inv){
    const invcode = inv.cinvcode;
    return await this.getBom(invcode);
    }
    else{
      return new BomItem();
    }
  }

  public async findByJno(
    conditions: FindConditions<SearchFindCondition>,
  ): Promise<BomItem> {
    // console.log('jno:' + jno);
    const his = await this.hRepository
      .createQueryBuilder('h')
      .leftJoinAndSelect('h.inventory', 'inv')
      .where('h.jno=:cond')
      .setParameters({ cond: conditions.term })
      .getOne();
    if (his && his.inventory) {
      const invcode = his.inventory.cinvcode;
      return await this.getBom(invcode);
    } else {
      return new BomItem();
    }
  }
  public async findByMno(
    conditions: FindConditions<SearchFindCondition>,
  ): Promise<BomItem> {
    // console.log('jno:' + jno);
    const his = await this.hRepository
      .createQueryBuilder('h')
      .leftJoinAndSelect('h.inventory', 'inv')
      .where('h.mno=:cond')
      .setParameters({ cond: conditions.term })
      .getOne();
    if (his && his.inventory) {
      const invcode = his.inventory.cinvcode;
      return await this.getBom(invcode);
    } else {
      return new BomItem();
    }
  }

  public async getBom(
    invcode: string,
    ): Promise<BomItem> {
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
    // console.log('p:'+JSON.stringify(parent));

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
        // console.log('c:' + JSON.stringify(c));
      }
      return child;
    });
    await Promise.all(newChildren).then(childrenTree => {
      // console.log('v:' + JSON.stringify(value));
      parent.children = childrenTree;
    });
    return parent;
    // console.log('parent' + this.i + ':' + JSON.stringify(parent));
  }
}

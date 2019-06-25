import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { FindOneOptions } from 'typeorm/find-options/FindOneOptions';
import { FindConditions } from 'typeorm/find-options/FindConditions';
import { SearchFindCondition } from 'misc/findcondition';
import { Inventory } from 'entities/inventory.entity';
import { BomItem } from 'entities/bomitem.entity';
import { Routing } from 'entities/routing.entity';
import { RdsIn } from 'entities/rdsin.entity';

@Injectable()
export class BomPlanService {
  // i: number;
  constructor(
    @Inject('BomPlanRepositoryToken')
    protected bRepository: Repository<BomItem>,
  ) {}

  public async find(
    conditions: FindConditions<SearchFindCondition>,
    options?: FindOneOptions<BomItem>,
  ): Promise<BomItem> {
    console.log('find one ' + JSON.stringify(conditions));
    // this.repository.findByIds
    const type = conditions.type;
    console.log('type:' + type);
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
    console.log('findOneByinv ' + conditions.term);
    // this.repository.findByIds

    const parent = await this.bRepository
      .createQueryBuilder('p')
      .leftJoinAndSelect('p.children', 'c')
      .leftJoinAndSelect('p.inv', 'pinv')
      .leftJoinAndSelect('c.cbomid', 'cp')
      .where('pinv.cinvcode=:cond')
      .setParameters({ cond: conditions.term })
      .getOne();
    // console.log('parent:' + JSON.stringify(parent));

    return parent;
    // return this.repository.findOne(id);
  }

  public async findByJno(
    conditions: FindConditions<SearchFindCondition>,
  ): Promise<BomItem> {
    // console.log('jno:' + jno);
    const bom = await this.bRepository
      .createQueryBuilder('h')
      .leftJoinAndSelect('h.inventory', 'inventory')
      .where('h.jno=:cond')
      .setParameters({ cond: conditions.term })
      .getOne();
    return bom;
    // return this.repository.findOne(id);
  }

  
  public async getBom(
    conditions: FindConditions<SearchFindCondition>,
    options?: FindOneOptions<BomItem>,
  ): Promise<BomItem> {
    let parent: BomItem = await this.bRepository
      .createQueryBuilder('b')
      .leftJoinAndSelect('b.inv', 'pinv')
      .leftJoinAndSelect('b.routings','pr')
      .leftJoinAndSelect('pinv.rdsins','rds')
      .where('pinv.cinvcode=:cond')
      .andWhere('b.parentbomid =0')
      .orderBy('pr.opseq')
      .setParameters({ cond: conditions.term })
      .getOne();
    // parent.qty = 2;
    if (parent && parent.childbomid) {parent = await this.getChildren(parent);}

    return parent;
  }
  protected async getChildren(parent: BomItem): Promise<BomItem> {
    // console.log('p:'+JSON.stringify(parent));
    
    const children = await this.bRepository
      .createQueryBuilder('b')
      .select()
      .leftJoinAndSelect('b.inv', 'pinv')
      .leftJoinAndSelect('b.routings','pr')
      .leftJoinAndSelect('pinv.rdsins','rds','rn < 11')
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

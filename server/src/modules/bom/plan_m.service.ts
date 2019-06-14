import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { FindOneOptions } from 'typeorm/find-options/FindOneOptions';
import { FindConditions } from 'typeorm/find-options/FindConditions';
import { FindCondition } from 'misc/findcondition';
import { BomParent } from 'entities/bom_parent.entity';
import { BomChild } from 'entities/bom_child.entity';
import { Inventory } from 'entities/inventory.entity';
import { BomBase } from 'entities/bom_base.entity';

@Injectable()
export class BomPMService {
  // i: number;
  constructor(
    @Inject('BomBaseRepositoryToken')
    protected bRepository: Repository<BomBase>,
  ) {}

  public async find(
    conditions: FindConditions<FindCondition>,
    options?: FindOneOptions<BomParent>,
  ): Promise<BomBase> {
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
    conditions: FindConditions<FindCondition>,
  ): Promise<BomBase> {
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
    console.log('parent:' + JSON.stringify(parent));

    return parent;
    // return this.repository.findOne(id);
  }

  public async findByJno(
    conditions: FindConditions<FindCondition>,
  ): Promise<BomBase> {
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
    conditions: FindConditions<FindCondition>,
    options?: FindOneOptions<BomBase>,
  ): Promise<BomBase> {
    let parent: BomBase = await this.bRepository
      .createQueryBuilder('p')
      .leftJoinAndSelect('p.inv', 'pinv')
      .where('pinv.cinvcode=:cond')
      .andWhere('p.parentbomid =0')
      .setParameters({ cond: conditions.term })
      .getOne();
    // parent.qty = 2;
    parent = await this.getChildren(parent);

    return parent;
  }
  protected async getChildren(parent: BomBase): Promise<BomBase> {
    // console.log('p:'+JSON.stringify(parent));
    
    const children = await this.bRepository
      .createQueryBuilder('p')
      .select()
      .leftJoinAndSelect('p.inv', 'pinv')
      .where('parentbomid=:bomid', { bomid: parent.childbomid })
      .orderBy('id')
      .getMany();

    const newChildren = children.map(async child => {
      child.qty = child.unitqty * parent.qty;
      child.lvl = parent.lvl + '.' + child.lvl;
      if (child.childbomid) {
        // c.children=[];
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

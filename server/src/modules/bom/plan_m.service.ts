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
  i: number;
  constructor(
    @Inject('BomParentRepositoryToken')
    protected pRepository: Repository<BomParent>,
    @Inject('BomChildRepositoryToken')
    protected cRepository: Repository<BomChild>,
    @Inject('BomBaseRepositoryToken')
    protected bRepository: Repository<BomBase>,
  ) {}

  public async find(
    conditions: FindConditions<FindCondition>,
    options?: FindOneOptions<BomParent>,
  ): Promise<BomParent> {
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
  ): Promise<BomParent> {
    console.log('findOneByinv ' + conditions.term);
    // this.repository.findByIds

    const parent = await this.pRepository
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
  ): Promise<BomParent> {
    // console.log('jno:' + jno);
    const bom = await this.pRepository
      .createQueryBuilder('h')
      .leftJoinAndSelect('h.inventory', 'inventory')
      .where('h.jno=:cond')
      .setParameters({ cond: conditions.term })
      .getOne();
    return bom;
    // return this.repository.findOne(id);
  }

  public async test(
    conditions: FindConditions<FindCondition>,
    options?: FindOneOptions<BomParent>,
  ): Promise<BomParent> {
    let parent: BomParent = await this.pRepository
      .createQueryBuilder('p')
      .leftJoinAndSelect('p.inv', 'pinv')
      .where('pinv.cinvcode=:cond')
      .setParameters({ cond: conditions.term })
      .getOne();
    parent.qty = 2;
    parent = await this.getChildren(parent);
    return parent;
  }
  protected async getChildren(parent: BomParent): Promise<BomParent> {
    parent.children = await this.pRepository
      .createQueryBuilder()
      .relation(BomChild, 'children')
      .of(parent)
      .loadMany();
    console.log('p:' + JSON.stringify(parent));
    parent.children.map(async c => {
      c.parentqty = parent.qty;
      c.qty = c.unitqty * parent.qty;
      c.seq = parent.lvl + '.' + c.seq;
      // console.log('crepository:'+this.cRepository.metadata.relations.map(_=>_.joinColumns.map(_=>_.databasePath+';'+_.propertyName)));
      // console.log('c.seq:'+c.seq)
      let p: BomParent = await this.cRepository
        .createQueryBuilder()
        .relation(BomChild, 'child')
        .of(c)
        .loadOne();
      if (p) {
        p.lvl = c.seq;
        p.qty = c.qty;
        c.child = p;
        p = await this.getChildren(p);
        c.child = p;
        // return p;
      }
    });
    return parent;
  }
  public async testbase(
    conditions: FindConditions<FindCondition>,
    options?: FindOneOptions<BomBase>,
  ): Promise<BomBase> {
    let parent: BomBase = await this.bRepository
      .createQueryBuilder('p')
      .leftJoinAndSelect('p.inv', 'pinv')
      .where('pinv.cinvcode=:cond')
      .andWhere('p.id =0')
      .setParameters({ cond: conditions.term })
      .getOne();
    parent.qty = 2;
    this.i = 0;
    parent = await this.getChildrenb(parent);
    return parent;
  }
  protected async getChildrenb(parent: BomBase): Promise<BomBase> {
    // console.log('p:'+JSON.stringify(parent));
    this.i++;
    parent.children = await this.bRepository
      .createQueryBuilder()
      .relation(BomBase, 'children')
      .of(parent)
      .loadMany();
    console.log('p:' + JSON.stringify(parent));
    parent.children.map(async c => {
      // c.parentqty=parent.qty;
      c.qty = c.unitqty * parent.qty;
      c.lvl = parent.lvl + '.' + c.lvl;
      if (c.bomid) await this.getChildrenb(c);
      // c.child=p;
      // return c;
      // }
    });
    console.log('parent' + this.i + ':' + JSON.stringify(parent));
    return parent;
  }
}

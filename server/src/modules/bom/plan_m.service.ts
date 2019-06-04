import { Injectable, Inject } from '@nestjs/common';
import {  Repository } from 'typeorm';
import { FindOneOptions } from 'typeorm/find-options/FindOneOptions';
import { FindConditions } from 'typeorm/find-options/FindConditions';
import { FindCondition } from 'misc/findcondition';
import { BomParent } from 'entities/bom_parent.entity';
import { BomChild } from 'entities/bom_child.entity';

@Injectable()
export class BomPMService {
  constructor(
    @Inject('BomPmRepositoryToken')
    protected pRepository: Repository<BomParent>,
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
       
    let parent = await this.pRepository
      .createQueryBuilder('p')
      .leftJoinAndSelect('p.children','c')
      .leftJoinAndSelect('p.inv','pinv')
      .where('pinv.cinvcode=:cond')
      .setParameters({ cond: conditions.term })
      .getOne();
    console.log('parent:'+JSON.stringify(parent));

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
}

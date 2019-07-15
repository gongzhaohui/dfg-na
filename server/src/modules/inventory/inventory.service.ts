import { Injectable, Inject } from '@nestjs/common';
import { Repository, FindOperator } from 'typeorm';
import { Inventory } from '../../entities/inventory.entity';
import { FindOneOptions } from 'typeorm/find-options/FindOneOptions';
import { FindConditions } from 'typeorm/find-options/FindConditions';
import { SearchFindCondition } from '../../misc/findcondition';

@Injectable()
export class InventoryService {
  constructor(
    @Inject('InventoryRepositoryToken')
    protected repository: Repository<Inventory>,
  ) {}
  public async findOne(
    conditions: FindConditions<SearchFindCondition>,
    options?: FindOneOptions<Inventory>,
  ): Promise<Inventory> {
    console.log('find one ' + JSON.stringify(conditions));
    // this.repository.findByIds
    const type = conditions.type;
    console.log('type:' + type);
    switch (type) {
      case 'jno':
        return this.findOneByJno(conditions);
      case 'mno':
        return this.findOneByMno(conditions);

      default:
        return this.findOneById(conditions);
    }
  }
  public async findOneById(
    conditions: FindConditions<SearchFindCondition>,
  ): Promise<Inventory> {
    // console.log('findOneById ' + conditions.term);
    // // this.repository.findByIds
    // console.log('repository:'+JSON.stringify (this.repository.metadata.columns.map(_=>_.propertyAliasName)));
    const inventory = this.repository
      .createQueryBuilder('inventory')
      .select()
      .where('inventory.cinvcode=:cond')
      .orderBy('inventory.cinvcode')
      .setParameters({ cond: conditions.term })
      .getOne();
    return inventory;
    // return this.repository.findOne(id);
  }

  public async findOneByJno(
    conditions: FindConditions<SearchFindCondition>,
  ): Promise<Inventory> {
    // console.log('jno:' + jno);
    const inventory = this.repository
      .createQueryBuilder('inventory')
      .select()
      .where('inventory.jno=:cond')
      .setParameters({ cond: conditions.term })
      .getOne();
    return inventory;
    // return this.repository.findOne(id);
  }
  public async findOneByMno(
    conditions: FindConditions<SearchFindCondition>,
  ): Promise<Inventory> {
    // console.log('jno:' + jno);
    const inventory = this.repository
      .createQueryBuilder('inventory')
      .select()
      .where('inventory.jno=:cond')
      .setParameters({ cond: conditions.term })
      .getOne();
    return inventory;
    // return this.repository.findOne(id);
  }
}

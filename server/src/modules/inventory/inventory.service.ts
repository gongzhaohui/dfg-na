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
  public async findOne(type: string, term: string): Promise<Inventory> {
    if (['cinvcode', 'cinvaddcode', 'cinvstd'].includes(type)) {
      const strWhere = `${type}=:cond`;
      const inv = await this.repository
        .createQueryBuilder('')
        .where(strWhere)
        .setParameters({ cond: term })
        .getOne();
      return inv;
    } else {
      return null;
    }
  }
}

import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Inventory } from '../../entities/inventory.entity';
// import { FindOneOptions } from 'typeorm/find-options/FindOneOptions';

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

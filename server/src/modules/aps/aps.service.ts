import { Injectable, Inject } from '@nestjs/common';
import { Repository, DeepPartial } from 'typeorm';
import { FindOneOptions } from 'typeorm/find-options/FindOneOptions';
import { FindConditions } from 'typeorm/find-options/FindConditions';
import {
  HourRateFindCondition,
  StockTakingFindCondition,
} from '../../misc/findcondition';
// import { BomItem } from 'entities/bomitem.entity';
import { StockTaking } from '../../entities/stocktaking.entity';

@Injectable()
export class ApsService {
  // i: number;
  constructor(
    @Inject('ApsRepositoryToken')
    protected sRepository: Repository<StockTaking>,
  ) {}

  public async find(
    conditions: FindConditions<StockTakingFindCondition>,
    options?: FindOneOptions<StockTaking>,
  ): Promise<StockTaking[]> {
    const st = await this.sRepository
      .createQueryBuilder('st')
      .where('st.period =:period')
      .andWhere('st.category =:category')
      .andWhere('st.creator =:creator')
      .setParameters({
        category: conditions.category,
        period: conditions.period,
        creator: conditions.creator,
      })
      .getMany();
    return st;
  }
  public async add(data: DeepPartial<StockTaking>) {
    const record = this.sRepository.create(data);
    // console.log(record);
    return await this.sRepository.save(record);
  }
  public async update(data: DeepPartial<StockTaking>) {
    return await this.sRepository.save(data);
  }
  public async remove(id: number) {
    return await this.sRepository.delete(id);
  }
}

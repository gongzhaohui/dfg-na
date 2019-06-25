import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { FindOneOptions } from 'typeorm/find-options/FindOneOptions';
import { FindConditions } from 'typeorm/find-options/FindConditions';
import { HourRateFindCondition } from 'misc/findcondition';
import { BomItem } from 'entities/bomitem.entity';
import { HourRate } from 'entities/hourrate.entity';

@Injectable()
export class HourRateService {
  // i: number;
  constructor(
    @Inject('HourRateRepositoryToken')
    protected hRepository: Repository<HourRate>,
  ) {}

  public async find(
    conditions: FindConditions<HourRateFindCondition>,
    options?: FindOneOptions<HourRate>,
  ): Promise<HourRate> {
    const hr=await this.hRepository
    .createQueryBuilder('h')
    .where('h.cinvccode=:invcccode')
    .andWhere('h.period =:period')
    .setParameters({ invcccode: conditions.cinvccode,period:conditions.period })
    .getOne();
    return hr;
  }
    
}

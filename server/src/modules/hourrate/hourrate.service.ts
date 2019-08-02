import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { HourRate } from '../../entities/hourrate.entity';

@Injectable()
export class HourRateService {
  // i: number;
  constructor(
    @Inject('HourRateRepositoryToken')
    protected hRepository: Repository<HourRate>,
  ) {}

  public async find(cinvccode: string, period: string): Promise<HourRate> {
    const hr = await this.hRepository
      .createQueryBuilder('h')
      .where('h.cinvccode=:invcccode')
      .andWhere('h.period =:period')
      .setParameters({
        invcccode: cinvccode,
        period: period,
      })
      .getOne();
    return hr;
  }
}

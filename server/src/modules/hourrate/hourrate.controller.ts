import {
  Body,
  Get,
  Param,
  ParseIntPipe,
  Query,
  Controller,
} from '@nestjs/common';
import { HourRateService } from './hourrate.service';
import { FindConditions } from 'typeorm/find-options/FindConditions';
import { HourRateFindCondition } from '../../misc/findcondition';
import { HourRate } from '../../entities/hourrate.entity';
@Controller('/api/hourrate')
export class HourRateController {
  constructor(protected service: HourRateService) {}
  @Get()
  public async find(
    @Query() query: HourRateFindCondition,
  ): Promise<HourRate> {
    const cinvccode = query.cinvccode;
    const period = query.period;
    return this.service.find(cinvccode, period);
  }
}

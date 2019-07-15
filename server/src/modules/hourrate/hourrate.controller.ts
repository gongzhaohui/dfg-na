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
    @Query() query: FindConditions<HourRateFindCondition>,
  ): Promise<HourRate> {
    // console.log(JSON.stringify(query));
    return this.service.find(query);
  }
}

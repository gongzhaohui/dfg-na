import {
  Body,
  Get,
  Param,
  ParseIntPipe,
  Query,
  Controller,
  Post,
} from '@nestjs/common';
import { PandianService } from './pandian.service';
import { FindConditions } from 'typeorm/find-options/FindConditions';
import { HourRateFindCondition, StockTakingFindCondition } from '../../misc/findcondition';
import { StockTaking } from 'src/entities/stocktaking.entity';
@Controller('/api/cshelf')

export class PandianController {
  constructor(protected service: PandianService) {}
  @Get()
  public async find(
    @Query() query: FindConditions<StockTakingFindCondition>,
  ): Promise<StockTaking> {
    // console.log(JSON.stringify(query));
    return this.service.find(query);
  }
  @Post()
  public async insert(){
    
  }

}

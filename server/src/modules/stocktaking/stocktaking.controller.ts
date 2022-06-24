import
  {
    Body, Controller, Delete, Get,
    Param, Post,
    Put, Query
  } from '@nestjs/common';
import { StockTakingService } from './stocktaking.service';
// import { FindConditions } from 'typeorm/find-options/FindConditions';
import { StockTaking } from 'src/entities/stocktaking.entity';
import { DeepPartial } from 'typeorm';
import { StockTakingFindCondition } from '../../misc/findcondition';
@Controller('/api/stocktaking')
export class StockTakingController {
  constructor(protected service: StockTakingService) {}
  @Get()
  public async find(
    @Query() query: StockTakingFindCondition,
  ): Promise<StockTaking[]> {
    // console.log(JSON.stringify(query));
    // const field = query.type;
    // const term = query.term;
    return this.service.find(query);
  }
  @Post()
  public async insert(@Body() body: DeepPartial<StockTaking>) {
    // console.log(body);
    return this.service.add(body);
  }
  @Put()
  public async update(@Body() body: DeepPartial<StockTaking>) {
    return this.service.update(body);
  }
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}

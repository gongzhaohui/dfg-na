/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 15:54:55
 * @LastEditTime: 2019-08-10 11:21:56
 * @LastEditors: Please set LastEditors
 */
import
  {
    Body, Controller, Delete, Get,
    Param, Post,
    Put, Query
  } from '@nestjs/common';
import { ApsService } from './aps.service';
// import { FindConditions } from 'typeorm/find-options/FindConditions';
import { StockTaking } from 'src/entities/stocktaking.entity';
import { DeepPartial } from 'typeorm';
import { StockTakingFindCondition } from '../../misc/findcondition';
@Controller('/api/aps')
export class ApsController {
  constructor(protected service: ApsService) {}
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

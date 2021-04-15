import { Get, Query, Controller, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { LogHistoryService } from './log.service';
// import { FindConditions } from 'typeorm/find-options/FindConditions';
import { LogFindCondition } from '../../misc/findcondition';
import { LogHistory } from 'src/entities/log-history.entity';
import { DeepPartial } from 'typeorm';
@Controller('/api/log/history')
export class LogHistoryController {
  constructor(protected service: LogHistoryService) {}
  @Get()
  public async find(@Query() conditions:LogFindCondition): Promise<LogHistory[]> {
    
    return this.service.find(conditions);
  }
  @Post()
  public async insert(@Body() body: DeepPartial<LogHistory>) {
     console.log(body);
    return this.service.add(body);
  }
  @Put()
  public async update(@Body() body: DeepPartial<LogHistory>) {
    return this.service.update(body);
  }
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}

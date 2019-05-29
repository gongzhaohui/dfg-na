import {Body, Get, Param, ParseIntPipe, Query,Controller} from '@nestjs/common';
import { HistoryService } from './history.service';
import {History} from '../../entities/History.entity';
import {BaseController} from '../../base';
import {FindConditions} from 'typeorm/find-options/FindConditions';
import { FindCondition } from 'misc/findcondition';
@Controller('/api/history')
export class HistoryController {
  constructor(protected service: HistoryService) {
  }
  @Get()
	public async find(@Query() query: FindConditions<FindCondition>): Promise<History[]> {
		// console.log(JSON.stringify(query));
		return this.service.find(query);
	}
}
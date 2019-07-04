import {Body, Get, Param, ParseIntPipe, Query,Controller} from '@nestjs/common';
import { HistoryService } from './history.service';
import {History} from '../../entities/History.entity';
import {FindConditions} from 'typeorm/find-options/FindConditions';
import { SearchFindCondition } from 'misc/findcondition';
@Controller('/api/history')
export class HistoryController {
  constructor(protected service: HistoryService) {
  }
  @Get()
	public async find(@Query() query: FindConditions<SearchFindCondition>): Promise<History[]> {
		// console.log(JSON.stringify(query));
		return this.service.find(query);
	}
}
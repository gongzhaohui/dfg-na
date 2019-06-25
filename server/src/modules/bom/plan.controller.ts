import {Body, Get, Param, ParseIntPipe, Query,Controller} from '@nestjs/common';
import { BomPlanService } from './plan.service';
import {BaseController} from '../../base';
import {FindConditions} from 'typeorm/find-options/FindConditions';
import { SearchFindCondition } from 'misc/findcondition';
import { BomItem } from 'entities/bomitem.entity';
@Controller('/api/bom/plan/m')
export class BomPlanController {
  constructor(protected service: BomPlanService) {
  }
  @Get('/test')
	public async find(@Query() query: FindConditions<SearchFindCondition>): Promise<BomItem> {
		// console.log(JSON.stringify(query));
		return this.service.find(query);
	}
	@Get()
	public async getBom(@Query() query: FindConditions<SearchFindCondition>): Promise<BomItem> {
		// console.log(JSON.stringify(query));
		return this.service.getBom(query);
}
}
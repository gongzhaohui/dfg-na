import {Body, Get, Param, ParseIntPipe, Query,Controller} from '@nestjs/common';
import { BomPMService } from './plan_m.service';
import {BaseController} from '../../base';
import {FindConditions} from 'typeorm/find-options/FindConditions';
import { FindCondition } from 'misc/findcondition';
import { BomItem } from 'entities/bomitem.entity';
@Controller('/api/bom/plan/m')
export class BomPMController {
  constructor(protected service: BomPMService) {
  }
  @Get('/test')
	public async find(@Query() query: FindConditions<FindCondition>): Promise<BomItem> {
		// console.log(JSON.stringify(query));
		return this.service.find(query);
	}
	@Get()
	public async getBom(@Query() query: FindConditions<FindCondition>): Promise<BomItem> {
		// console.log(JSON.stringify(query));
		return this.service.getBom(query);
}
}
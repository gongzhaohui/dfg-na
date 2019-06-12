import {Body, Get, Param, ParseIntPipe, Query,Controller} from '@nestjs/common';
import { BomPMService } from './plan_m.service';
import {BaseController} from '../../base';
import {FindConditions} from 'typeorm/find-options/FindConditions';
import { FindCondition } from 'misc/findcondition';
import { BomParent } from 'entities/bom_parent.entity';
import { BomBase } from 'entities/bom_base.entity';
@Controller('/api/bom/pm')
export class BomPMController {
  constructor(protected service: BomPMService) {
  }
  @Get()
	public async find(@Query() query: FindConditions<FindCondition>): Promise<BomParent> {
		// console.log(JSON.stringify(query));
		return this.service.find(query);
	}
	@Get('/test')
	public async test(@Query() query: FindConditions<FindCondition>): Promise<BomParent> {
		// console.log(JSON.stringify(query));
		return this.service.test(query);
	}
	@Get('/testb')
	public async testb(@Query() query: FindConditions<FindCondition>): Promise<BomBase> {
		// console.log(JSON.stringify(query));
		return this.service.testbase(query);
}
}
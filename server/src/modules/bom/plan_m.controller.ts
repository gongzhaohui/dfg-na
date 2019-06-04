import {Body, Get, Param, ParseIntPipe, Query,Controller} from '@nestjs/common';
import { BomPMService } from './plan_m.service';
import {Bom_P_M} from '../../entities/bom_p_m.entity';
import {BaseController} from '../../base';
import {FindConditions} from 'typeorm/find-options/FindConditions';
import { FindCondition } from 'misc/findcondition';
@Controller('/api/bom/pm')
export class BomPMController {
  constructor(protected service: BomPMService) {
  }
  @Get()
	public async find(@Query() query: FindConditions<FindCondition>): Promise<Bom_P_M[]> {
		// console.log(JSON.stringify(query));
		return this.service.find(query);
	}
}
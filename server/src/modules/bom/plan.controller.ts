import { Get, Query, Controller } from '@nestjs/common';
import { BomPlanService } from './plan.service';
// import { FindConditions } from 'typeorm/find-options/FindConditions';
import { SearchFindCondition } from '../../misc/findcondition';
import { BomItem } from '../../entities/bomitem.entity';
@Controller('/api/bom/plan/m')
export class BomPlanController {
  constructor(protected service: BomPlanService) {}

  @Get()
  public async getBom(@Query() query: SearchFindCondition): Promise<BomItem> {
    const field = query.type;
    const term = query.term;
    return this.service.find(field, term);
  }
}

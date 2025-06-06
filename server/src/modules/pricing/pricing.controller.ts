import { Controller, Get, Query } from '@nestjs/common';
import { PricingService } from './pricing.service';
// import { FindConditions } from 'typeorm/find-options/FindConditions';
import { BomItem } from '../../entities/bomitem.entity';
import { SearchFindCondition } from '../../misc/findcondition';
@Controller('/api/pricing')
export class PricingController {
  constructor(protected service: PricingService) {}

  @Get()
  public async getBom(@Query() query: SearchFindCondition): Promise<BomItem> {
    const field = query.type;
    const term = query.term;
    return this.service.find(field, term);
  }
}

import { Get, Query, Controller } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { Inventory } from '../../entities/inventory.entity';
import { FindConditions } from 'typeorm/find-options/FindConditions';
import { SearchFindCondition } from '../../misc/findcondition';
@Controller('/api/inventory')
export class InventoryController {
  constructor(protected service: InventoryService) {}
  @Get()
  public async find(@Query() query: SearchFindCondition): Promise<Inventory> {
    // console.log(JSON.stringify(query));
    const type = query.type;
    const term = query.term;
    return this.service.findOne(type, term);
  }
}

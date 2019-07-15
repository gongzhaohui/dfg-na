import {
  Body,
  Get,
  Param,
  ParseIntPipe,
  Query,
  Controller,
} from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { Inventory } from '../../entities/inventory.entity';
import { BaseController } from '../../base';
import { FindConditions } from 'typeorm/find-options/FindConditions';
import { SearchFindCondition } from '../../misc/findcondition';
@Controller('/api/inventory')
export class InventoryController {
  constructor(protected service: InventoryService) {}
  @Get()
  public async find(
    @Query() query: FindConditions<SearchFindCondition>,
  ): Promise<Inventory> {
    // console.log(JSON.stringify(query));
    return this.service.findOne(query);
  }
}

import { Get, Query, Controller } from '@nestjs/common';
import { OrderInfoService } from './order-info.service';
import { OrderInfo } from '../../entities/order-info.entity';
// import { FindConditions } from 'typeorm/find-options/FindConditions';
import { OrderFindCondition } from '../../misc/findcondition';
@Controller('/api/log/orderinfo')
export class OrderInfoController {
  constructor(protected service: OrderInfoService) {}
  @Get()
  public async find(@Query() conditions: OrderFindCondition): Promise<OrderInfo> {
    return this.service.find(conditions);
  }
}

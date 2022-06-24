import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
// import { FindOneOptions } from 'typeorm/find-options/FindOneOptions';
// import { FindConditions } from 'typeorm/find-options/FindConditions';
import { OrderInfo } from '../../entities/order-info.entity';
import { OrderFindCondition } from '../../misc/findcondition';

@Injectable()
export class OrderInfoService {
  constructor(
    @Inject('OrderInfoRepositoryToken')
    protected repository: Repository<OrderInfo>,
  ) {}

  public async find(conditions:OrderFindCondition): Promise<OrderInfo> {
    const {type,barcode}=conditions;

    const strWhere=(type?type:'jno')+`='${barcode}'`
    const order = await this.repository
      .createQueryBuilder('log')
      .where(strWhere)
      .getOne();
    return order;
  }
}

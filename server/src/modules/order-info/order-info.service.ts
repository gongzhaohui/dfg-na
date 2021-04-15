import { Injectable, Inject } from '@nestjs/common';
import { Repository, FindOperator } from 'typeorm';
import { History } from '../../entities/history.entity';
import { FindOneOptions } from 'typeorm/find-options/FindOneOptions';
import { FindConditions } from 'typeorm/find-options/FindConditions';
import { OrderFindCondition } from '../../misc/findcondition';
import { OrderInfo } from '../../entities/order-info.entity';

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

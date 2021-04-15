import { Connection } from 'typeorm';
import { OrderInfo } from '../../entities/order-info.entity';

export const OrderInfoProviders = [
  {
    provide: 'OrderInfoRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(OrderInfo),
    inject: ['DbConnectionToken'],
  },
];

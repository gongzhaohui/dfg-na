/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 15:54:55
 * @LastEditTime: 2019-08-13 11:11:08
 * @LastEditors: Please set LastEditors
 */
import { Connection } from 'typeorm';
import { StockTaking } from '../../entities/stocktaking.entity';

export const StockTakingProviders = [
  {
    provide: 'ApsRepositoryToken',
    useFactory: (connection: Connection) =>
      connection.getRepository(StockTaking),
    inject: ['DbConnectionToken'],
  },
];

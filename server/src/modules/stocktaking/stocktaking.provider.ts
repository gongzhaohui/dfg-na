import { Connection } from 'typeorm';
import { StockTaking } from '../../entities/stocktaking.entity';

export const StockTakingProviders = [
  {
    provide: 'StockTakingRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(StockTaking),
    inject: ['DbConnectionToken'],
  },
];

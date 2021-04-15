import { LogHistory, LogList } from '../../entities/log-history.entity';
import { Connection } from 'typeorm';

export const LogHistoryProviders = [
  {
    provide: 'LogHistoryRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(LogHistory),
    inject: ['DbConnectionToken'],
  },
  {
    provide: 'LogListRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(LogList),
    inject: ['DbConnectionToken'],
  },
];

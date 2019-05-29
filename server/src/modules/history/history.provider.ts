import { Connection } from 'typeorm';
import { History } from '../../entities/history.entity';

export const HistoryProviders = [
  {
    provide: 'HistoryRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(History),
    inject: ['DbConnectionToken'],
  },
];
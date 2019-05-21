import { Connection, Repository } from 'typeorm';
import { SO } from '../../entities/so.entity';

export const SoProviders = [
  {
    provide: 'OpenSoRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(SO),
    inject: ['DbConnectionToken'],
  },
];
import { Connection } from 'typeorm';
import { MoEntity } from '../../entities/mo.entity';

export const MoProviders = [
  {
    provide: 'MoRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(MoEntity),
    inject: ['DbConnectionToken'],
  },
];

import { Operation } from '../../entities/operation.entity';
import { Connection } from 'typeorm';

export const OperationProviders = [
  {
    provide: 'OperationRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Operation),
    inject: ['DbConnectionToken'],
  },
];

import { Connection } from 'typeorm';
import { Operation } from '../../entities/mes/operation.entity';

export const OperationProviders = [
  {
    provide: 'OperationRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Operation),
    inject: ['DbConnectionToken'],
  },
];

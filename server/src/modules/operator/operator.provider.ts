import { Operator } from '../../entities/operator.entity';
import { Connection } from 'typeorm';

export const OperatorProviders = [
  {
    provide: 'OperatorRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Operator),
    inject: ['DbConnectionToken'],
  },
];

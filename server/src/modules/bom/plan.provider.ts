import { Connection } from 'typeorm';
import { BomItem } from '../../entities/bomitem.entity';

export const BomPlanProviders = [
  {
    provide: 'BomPlanRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(BomItem),
    inject: ['DbConnectionToken'],
  },
];
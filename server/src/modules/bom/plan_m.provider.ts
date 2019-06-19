import { Connection } from 'typeorm';
import { BomItem } from 'entities/bomitem.entity';

export const BomPMProviders = [
  {
    provide: 'BomBaseRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(BomItem),
    inject: ['DbConnectionToken'],
  },
];
import { Connection } from 'typeorm';
import { BomParent } from 'entities/bom_parent.entity';

export const BomPMProviders = [
  {
    provide: 'BomParentRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(BomParent),
    inject: ['DbConnectionToken'],
  },
  {
    provide: 'BomChildRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(BomParent),
    inject: ['DbConnectionToken'],
  },
];
import { Connection } from 'typeorm';
import { BomParent } from 'entities/bom_parent.entity';

export const BomPMProviders = [
  {
    provide: 'BomPmRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(BomParent),
    inject: ['DbConnectionToken'],
  },
];
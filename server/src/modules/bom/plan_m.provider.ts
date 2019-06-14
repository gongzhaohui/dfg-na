import { Connection } from 'typeorm';
import { BomParent } from 'entities/bom_parent.entity';
import { BomChild } from 'entities/bom_child.entity';
import { BomBase } from 'entities/bom_base.entity';

export const BomPMProviders = [
  {
    provide: 'BomBaseRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(BomBase),
    inject: ['DbConnectionToken'],
  },
];
import { Connection } from 'typeorm';
import { BomItem } from '../../entities/bomitem.entity';

export const PricingProviders = [
  {
    provide: 'PricingRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(BomItem),
    inject: ['DbConnectionToken'],
  },
];

import { Connection, Repository } from 'typeorm';
import { Inventory } from '../../entities/inventory.entity';

export const InventoryProviders = [
  {
    provide: 'InventoryRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Inventory),
    inject: ['DbConnectionToken'],
  },
];
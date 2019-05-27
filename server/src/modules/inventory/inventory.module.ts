import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { InventoryProviders } from './inventory.providers';
import { InventoryService } from './inventory.service';
import {InventoryController} from './inventory.controller';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...InventoryProviders,
    InventoryService,
  ],
  controllers: [InventoryController],
})
export class InventoryModule {}
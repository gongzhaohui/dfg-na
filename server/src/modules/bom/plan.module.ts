import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { BomPlanProviders } from './plan.provider';
import { BomPlanService } from './plan.service';
import {BomPlanController} from './plan.controller';
import { HistoryModule } from 'modules/history/history.module';
import { InventoryModule } from 'modules/inventory/inventory.module';

@Module({
  imports: [DatabaseModule,HistoryModule,InventoryModule],
  providers: [
    ...BomPlanProviders,
    BomPlanService,
  ],
  controllers: [BomPlanController],
})
export class BomPlanModule {}
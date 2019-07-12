import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { BomPlanProviders } from './plan.provider';
import { BomPlanService } from './plan.service';
import { BomPlanController } from './plan.controller';
import { HistoryModule } from '../history/history.module';
import { InventoryModule } from '../inventory/inventory.module';

@Module({
  imports: [DatabaseModule, HistoryModule, InventoryModule],
  providers: [...BomPlanProviders, BomPlanService],
  controllers: [BomPlanController],
})
export class BomPlanModule {}

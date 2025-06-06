import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { HistoryModule } from '../history/history.module';
import { InventoryModule } from '../inventory/inventory.module';
import { PricingProviders } from './pricing.provider';
import { PricingController } from './pricing.controller';
import { PricingService } from './pricing.service';

@Module({
  imports: [DatabaseModule, HistoryModule, InventoryModule],
  providers: [...PricingProviders, PricingService],
  controllers: [PricingController],
})
export class BomPlanModule {}

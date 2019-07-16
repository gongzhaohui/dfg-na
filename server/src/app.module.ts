import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InventoryModule } from './modules/inventory/inventory.module';
import { DatabaseModule } from './modules/database/database.module';
import { HistoryModule } from './modules/history/history.module';
import { BomPlanModule } from './modules/bom/plan.module';
import { HourRateModule } from './modules/hourrate/hourrate.module';
@Module({
  imports: [
    DatabaseModule,
    InventoryModule,
    BomPlanModule,
    HourRateModule,
    HistoryModule,
  ],
  controllers: [
    AppController,
  ],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InventoryModule } from './modules/inventory/inventory.module';
import { DatabaseModule } from './modules/database/database.module';
import { HistoryModule } from './modules/history/history.module';
import { BomPlanModule } from './modules/bom/plan.module';
import { HourRateModule } from './modules/hourrate/hourrate.module';
import { StockTakingModule } from './modules/stocktaking/stocktaking.module';
import { MoModule } from './modules/mo/mo.module';
import {LogHistoryModule} from './modules/log/log.module'
import { OperationModule } from './modules/operation/operation.module';
import { OperatorModule } from './modules/operator/operator.module';
import { OrderInfoModule } from './modules/order-info/order-info.module';
@Module({
  imports: [
    DatabaseModule,
    InventoryModule,
    BomPlanModule,
    HourRateModule,
    HistoryModule,
    StockTakingModule,
    MoModule,
    LogHistoryModule,
    OperationModule,
    OperatorModule,
    OrderInfoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

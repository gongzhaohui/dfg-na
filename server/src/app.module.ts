import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import {DatabaseModule} from './database/database.module';
import { SoModule } from './modules/so/so.module';
// import {OpenSoController} from './entities/openso.controller';
import { SearchModule } from './modules/search/search.module';
import { InventoryModule } from './modules/inventory/inventory.module';
import { DatabaseModule } from './modules/database/database.module';
import { HistoryModule } from './modules/history/history.module';
import { BomPlanModule } from './modules/bom/plan.module';
import { HourRateModule } from './modules/hourrate/hourrate.module';
@Module({
  imports: [
    DatabaseModule,
    HistoryModule,
    SoModule,
    SearchModule,
    InventoryModule,
    BomPlanModule,
    HourRateModule,
  ],
  controllers: [/*AppController*/],
  providers: [AppService],
})
export class AppModule {}

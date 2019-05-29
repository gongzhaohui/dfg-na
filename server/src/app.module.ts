import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import {DatabaseModule} from './database/database.module';
import { SoModule } from './modules/so/so.module';
// import {OpenSoController} from './entities/openso.controller';
import { SearchModule } from './modules/search/search.module';
import { InventoryModule } from './modules/inventory/inventory.module';
import { DatabaseModule } from 'modules/database/database.module';
import { HistoryModule } from 'modules/history/history.module';
@Module({
  imports: [
    DatabaseModule,
    SoModule,
    SearchModule,
    InventoryModule,
    HistoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import {DatabaseModule} from './database/database.module';
import {SoModule} from './modules/so/so.module';
// import {OpenSoController} from './entities/openso.controller';
import {SearchModule} from './modules/search/search.module';
@Module({
  imports: [ SoModule, SearchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

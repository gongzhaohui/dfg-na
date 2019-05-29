import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { HistoryProviders } from './bom_r_m.provider';
import { HistoryService } from './bom_r_m.service';
import {HistoryController} from './bom_r_m.controller';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...HistoryProviders,
    HistoryService,
  ],
  controllers: [HistoryController],
})
export class HistoryModule {}
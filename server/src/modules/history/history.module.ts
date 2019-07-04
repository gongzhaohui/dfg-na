import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { HistoryProviders } from './history.provider';
import { HistoryService } from './history.service';
import { HistoryController } from './history.controller';

@Module({
  imports: [DatabaseModule],
  providers: [...HistoryProviders, HistoryService],
  exports: [...HistoryProviders, HistoryService],
  controllers: [HistoryController],
})
export class HistoryModule {}

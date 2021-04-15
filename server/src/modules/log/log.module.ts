import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { LogHistoryProviders } from './log.provider';
import { LogHistoryService } from './log.service';
import { LogHistoryController } from './log.controller';

@Module({
  imports: [DatabaseModule],
  providers: [...LogHistoryProviders, LogHistoryService],
  exports: [...LogHistoryProviders, LogHistoryService],
  controllers: [LogHistoryController],
})
export class LogHistoryModule {}

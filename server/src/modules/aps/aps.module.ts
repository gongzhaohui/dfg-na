import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { StockTakingProviders } from './aps.provider';
import { ApsService } from './aps.service';
import { ApsController } from './aps.controller';

@Module({
  imports: [DatabaseModule],
  providers: [...StockTakingProviders, ApsService],
  controllers: [ApsController],
})
export class ApsModule {}

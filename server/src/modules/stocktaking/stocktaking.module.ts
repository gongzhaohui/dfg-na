import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { StockTakingProviders } from './stocktaking.provider';
import { StockTakingService } from './stocktaking.service';
import { StockTakingController } from './stocktaking.controller';

@Module({
  imports: [DatabaseModule],
  providers: [...StockTakingProviders, StockTakingService],
  controllers: [StockTakingController],
})
export class StockTakingModule {}

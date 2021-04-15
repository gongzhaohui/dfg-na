import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { OrderInfoProviders } from './order-info.provider';
import { OrderInfoService } from './order-info.service';
import { OrderInfoController } from './order-info.controller';

@Module({
  imports: [DatabaseModule],
  providers: [...OrderInfoProviders, OrderInfoService],
  exports: [...OrderInfoProviders, OrderInfoService],
  controllers: [OrderInfoController],
})
export class OrderInfoModule {}

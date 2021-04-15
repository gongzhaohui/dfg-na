import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { OperationProviders } from './operation.provider';
import { OperationService } from './operation.service';
import { OperationController } from './operation.controller';

@Module({
  imports: [DatabaseModule],
  providers: [...OperationProviders, OperationService],
  exports: [...OperationProviders, OperationService],
  controllers: [OperationController],
})
export class OperationModule {}

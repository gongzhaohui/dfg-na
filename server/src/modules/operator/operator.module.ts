import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { OperatorProviders } from './operator.provider';
import { OperatorService } from './operator.service';
import { OperatorController } from './operator.controller';

@Module({
  imports: [DatabaseModule],
  providers: [...OperatorProviders, OperatorService],
  exports: [...OperatorProviders, OperatorService],
  controllers: [OperatorController],
})
export class OperatorModule {}

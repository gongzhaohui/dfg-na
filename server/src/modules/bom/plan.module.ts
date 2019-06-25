import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { BomPlanProviders } from './plan.provider';
import { BomPlanService } from './plan.service';
import {BomPlanController} from './plan.controller';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...BomPlanProviders,
    BomPlanService,
  ],
  controllers: [BomPlanController],
})
export class BomPlanModule {}
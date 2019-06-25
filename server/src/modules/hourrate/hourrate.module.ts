import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { HourRateProviders } from './hourrate.provider';
import { HourRateService } from './hourrate.service';
import {HourRateController} from './hourrate.controller';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...HourRateProviders,
    HourRateService,
  ],
  controllers: [HourRateController],
})
export class HourRateModule {}
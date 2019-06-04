import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { BomPMProviders } from './plan_m.provider';
import { BomPMService } from './plan_m.service';
import {BomPMController} from './plan_m.controller';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...BomPMProviders,
    BomPMService,
  ],
  controllers: [BomPMController],
})
export class BomPMModule {}
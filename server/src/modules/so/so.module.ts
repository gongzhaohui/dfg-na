import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { SoProviders } from './so.providers';
import { SoService } from './so.service';
import { SoController } from './so.controller';

@Module({
  imports: [DatabaseModule],
  providers: [...SoProviders, SoService],
  controllers: [SoController],
})
export class SoModule {}

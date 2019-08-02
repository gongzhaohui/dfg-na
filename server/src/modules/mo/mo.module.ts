import { Module } from '@nestjs/common';
import { MoService } from './mo.service';
import { MoController } from './mo.controller';
import { MoProviders } from './mo.provider';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [...MoProviders, MoService],
  exports: [...MoProviders, MoService],
  controllers: [MoController],
})
export class MoModule {}

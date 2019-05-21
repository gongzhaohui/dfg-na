import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
// import { OpenSoProviders } from './openso.providers';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';

@Module({
  imports: [DatabaseModule],
  providers: [
        SearchService,
  ],
  controllers: [SearchController],
})
export class SearchModule {}
import {
  Body,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
  Controller,
} from '@nestjs/common';
import { SearchService } from './search.service';
// import {OpenSO} from './openso.entity';
// import {BaseController} from '../base';
// import {FindConditions} from 'typeorm/find-options/FindConditions';
@Controller('/search')
export class SearchController {
  constructor(protected service: SearchService) {}
  @Get()
  public async find() {
    // console.log(JSON.stringify(query));
    return this.service.search();
  }
}

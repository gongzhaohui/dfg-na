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
import { SoService } from './so.service';
import { SO } from '../../entities/so.entity';
import { BaseController } from '../../base';
import { FindConditions } from 'typeorm/find-options/FindConditions';
@Controller('/os')
export class SoController extends BaseController<SO> {
  constructor(protected service: SoService) {
    super();
  }
  @Get()
  public async find(@Query() query: FindConditions<SO>): Promise<SO> {
    // console.log(JSON.stringify(query));
    return this.service.findOne(query);
  }
  @Get('/id/:id')
  public async findOneById(@Param('id') id: string) {
    return this.service.findOneById(id);
  }
  @Get('/jno/:jno')
  public async findOne(@Param('jno') jno: string) {
    return this.service.findOneByJno(jno);
  }
}

import
  {
    Body,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Put,
    Query
  } from '@nestjs/common';
import { BaseEntity, DeepPartial, DeleteResult, FindOneOptions } from 'typeorm';
import { BaseService } from './base.service';

export class BaseController<T extends BaseEntity> {
  protected service: BaseService<T>;

  @Get()
  public async find(@Query() query: FindOneOptions<T>): Promise<T> {
    // console.log(JSON.stringify(query));
    return this.service.findOne(query);
  }

  @Get('/:id')
  public async findOne(@Param('id') id: number) {
    return this.service.findOneById(id);
  }

  @Post('/')
  public async create(@Body() data: DeepPartial<T>): Promise<T> {
    return this.service.create(data);
  }

  @Put('/:id')
  public async update(
    @Param('id') id: number,
    @Body() data: DeepPartial<T>,
  ): Promise<T> {
    return this.service.update(id, data);
  }

  @Patch('/:id')
  public async patch(
    @Param('id') id: number,
    @Body() data: DeepPartial<T>,
  ): Promise<T> {
    return this.service.patch(id, data);
  }

  @Delete('/:id')
  public async delete(@Param('id') id: number): Promise<DeleteResult> {
    return this.service.delete(id);
  }
}

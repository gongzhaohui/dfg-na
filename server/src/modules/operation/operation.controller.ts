import { Controller, Get } from '@nestjs/common';
import { Operation } from '../../entities/mes/operation.entity';
import { OperationService } from './operation.service';
@Controller('/api/log/operation')
export class OperationController {
  constructor(protected service: OperationService) {}
  @Get()
  public async find(): Promise<Operation[]> {
    return this.service.find();
  }
}

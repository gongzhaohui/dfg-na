import { Get,  Controller } from '@nestjs/common';
import { OperationService } from './operation.service';
import { Operation } from '../../entities/operation.entity';
@Controller('/api/log/operation')
export class OperationController {
  constructor(protected service: OperationService) {}
  @Get()
  public async find(): Promise<Operation[]> {
    return this.service.find();
  }
}

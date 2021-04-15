import { Get, Query, Controller } from '@nestjs/common';
import { OperatorService } from './operator.service';
import { Operator } from '../../entities/operator.entity';
@Controller('/api/log/operator')
export class OperatorController {
  constructor(protected service: OperatorService) {}
  @Get()
  public async find(@Query() query): Promise<Operator[]> {
    const dept = query.dept;

    return this.service.find(dept);
  }
}

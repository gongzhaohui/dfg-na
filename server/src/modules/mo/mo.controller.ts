import { Controller, Get, Query } from '@nestjs/common';
import { SearchFindCondition } from '../../misc/findcondition';
import { MoEntity } from '../../entities/mo.entity';
import { MoService } from './mo.service';

@Controller('/api/mo')
export class MoController {
  constructor(protected service: MoService) {}
  @Get()
  public async find(@Query() query: SearchFindCondition): Promise<MoEntity> {
    const field = query.type;
    const term = query.term;
    return this.service.find(field, term);
  }
}

import { Get, Query, Controller } from '@nestjs/common';
import { HistoryService } from './history.service';
import { History } from '../../entities/history.entity';
// import { FindConditions } from 'typeorm/find-options/FindConditions';
import { SearchFindCondition } from '../../misc/findcondition';
@Controller('/api/history')
export class HistoryController {
  constructor(protected service: HistoryService) {}
  @Get()
  public async find(@Query() query: SearchFindCondition): Promise<History[]> {
    const field = query.type;
    const term = query.term;
    return this.service.findWithRds(field, term);
  }
}

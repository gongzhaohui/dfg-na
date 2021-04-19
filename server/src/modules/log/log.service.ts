import { Injectable, Inject } from '@nestjs/common';
import { DeepPartial, Repository } from 'typeorm';
import { LogFindCondition } from '../../misc/findcondition';
import { LogHistory, LogList } from '../../entities/log-history.entity';

@Injectable()
export class LogHistoryService {
  constructor(
    @Inject('LogHistoryRepositoryToken')
    protected repository: Repository<LogHistory>,
    @Inject('LogListRepositoryToken')
    protected list: Repository<LogList>,
  ) {}

  public async find(conditions:LogFindCondition): Promise<LogList[]> {
    const logs = await this.list
      .createQueryBuilder('log')
      .where('CONVERT(NVARCHAR(6),log_date,112) =:period')
      .andWhere('log.operation =:operation')
      // .andWhere('log.operator =:operator')
      .setParameters({
        operation: conditions.operation,
        period: conditions.period,
        // operator: conditions.operator,
      })
      .getMany();
    return logs;
  }
  public async add(data: DeepPartial<LogHistory>) {
    const record = this.repository.create(data);
    // console.log('record:',record);
    return await this.repository.save(record);
  }
  public async update(data: DeepPartial<LogHistory>) {
    data.updated=new Date();
    return await this.repository.save(data);
  }
  public async remove(id: number) {
    return await this.repository.delete(id);
  }
}

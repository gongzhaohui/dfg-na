import { Injectable, Inject } from '@nestjs/common';
import { Repository, FindOperator } from 'typeorm';
import { History } from '../../entities/history.entity';
import { FindOneOptions } from 'typeorm/find-options/FindOneOptions';
import { FindConditions } from 'typeorm/find-options/FindConditions';
import { SearchFindCondition } from '../../misc/findcondition';

@Injectable()
export class HistoryService {
  constructor(
    @Inject('HistoryRepositoryToken')
    protected repository: Repository<History>,
  ) {}

  public async findWithRds(type: string, term: string): Promise<History[]> {
    const alias = type === 'jno' || type === 'mno' ? 'h' : 'i';
    const strWhere = `${alias}.${type}=:cond`;
    const histories = await this.repository
      .createQueryBuilder('h')
      .leftJoinAndSelect('h.inventory', 'i')
      .leftJoinAndSelect('i.rdsins', 'rds1')
      .leftJoinAndSelect('i.rdsins10', 'rds10')
      .where(strWhere)
      .andWhere('isnull(rds1.rn,0)<11')
      .andWhere('isnull(rds10.rn,0)<11')
      .orderBy('h.jno')
      .setParameters({ cond: term })
      .getMany();
    return histories;
  }
  public async findOne(type: string, term: string): Promise<History> {
    const alias = type === 'jno' || type === 'mno' ? 'h' : 'i';
    const strWhere = `${alias}.${type}=:cond`;
    const history = await this.repository
      .createQueryBuilder('h')
      .leftJoinAndSelect('h.inventory', 'i')
      .where(strWhere)
      .orderBy('h.jno')
      .setParameters({ cond: term })
      .getOne();
    return history;
  }
}

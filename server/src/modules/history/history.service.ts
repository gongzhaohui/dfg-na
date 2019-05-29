import { Injectable, Inject } from '@nestjs/common';
import { Repository, FindOperator } from 'typeorm';
import { BaseService, SupperEntity } from '../../base';
import { History } from '../../entities/history.entity';
import { FindOneOptions } from 'typeorm/find-options/FindOneOptions';
import { FindConditions } from 'typeorm/find-options/FindConditions';
import { FindCondition } from 'misc/findcondition';

@Injectable()
export class HistoryService {
  constructor(
    @Inject('HistoryRepositoryToken')
    protected repository: Repository<History>,
  ) {}

  public async find(
    conditions: FindConditions<FindCondition>,
    options?: FindOneOptions<History>,
  ): Promise<History[]> {
    console.log('find one ' + JSON.stringify(conditions));
    // this.repository.findByIds
    const type = conditions.type;
    console.log('type:' + type);
    switch (type) {
      case 'jno':
        return this.findByJno(conditions);
      case 'mno':
        return this.findByJno(conditions);

      default:
        return this.findByInv(conditions);
    }
  }
  public async findByInv(
    conditions: FindConditions<FindCondition>,
  ): Promise<History[]> {
    console.log('findOneById ' + conditions.term);
    // this.repository.findByIds
    console.log(
      'repository:' +
        JSON.stringify(
          this.repository.metadata.columns.map(_ => _.propertyAliasName),
        ),
    );
    const history = this.repository
      .createQueryBuilder('h')
      .leftJoinAndSelect('h.inventory', 'inventory')
      .where('h.inventory=:cond')
      .orderBy('h.jno')
      .setParameters({ cond: conditions.term })
      .getMany();
    return history;
    // return this.repository.findOne(id);
  }

  public async findByJno(
    conditions: FindConditions<FindCondition>,
  ): Promise<History[]> {
    // console.log('jno:' + jno);
    const history = this.repository
      .createQueryBuilder('h')
      .leftJoinAndSelect('h.inventory', 'inventory')
      .where('h.jno=:cond')
      .setParameters({ cond: conditions.term })
      .getMany();
    return history;
    // return this.repository.findOne(id);
  }
}

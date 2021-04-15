import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Operator } from '../../entities/operator.entity';

@Injectable()
export class OperatorService {
  constructor(
    @Inject('OperatorRepositoryToken')
    protected repository: Repository<Operator>,
  ) {}

  public async find(dept: string): Promise<Operator[]> {
    dept = dept? dept +'%':'%';
    const strWhere = `dept like '${dept}'`;
    const operator = await this.repository
      .createQueryBuilder('h')
      .where(strWhere)
      .getMany();
    return operator;
  }
  
}

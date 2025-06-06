import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Operation } from '../../entities/mes/operation.entity';

@Injectable()
export class OperationService {
  constructor(
    @Inject('OperationRepositoryToken')
    protected repository: Repository<Operation>,
  ) {}

  public async find(): Promise<Operation[]> {
    const operation = await this.repository
      .createQueryBuilder('h')
      .getMany();
    return operation;
  }
 
}

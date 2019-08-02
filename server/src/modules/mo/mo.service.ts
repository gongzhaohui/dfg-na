import { Injectable, Inject } from '@nestjs/common';
import { MoEntity } from '../../entities/mo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MoService {
  constructor(
    @Inject('MoRepositoryToken')
    protected mRepository: Repository<MoEntity>,
  ) {}

  public async find(field: string, term: any): Promise<MoEntity> {
    const alias = 'm';
    // const orderBy ='id';
    const strWhere = alias?`${alias}.${field}=:term`:`${field}=:term`;
    // const strOrder= alias?`${alias}_${orderBy}`:`${orderBy}`;
    return await this.mRepository
      .createQueryBuilder(alias)
      .select()
      .where(strWhere)
      .setParameters({ term})
      .orderBy('isodid','DESC')
      .getOne();
  }
}

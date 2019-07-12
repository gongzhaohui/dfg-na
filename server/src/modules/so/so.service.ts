import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BaseService, SupperEntity } from '../../base';
import { SO } from '../../entities/so.entity';
import { FindOneOptions } from 'typeorm/find-options/FindOneOptions';
import { FindConditions } from 'typeorm/find-options/FindConditions';

@Injectable()
export class SoService extends BaseService<SO> {
  constructor(
    @Inject('OpenSoRepositoryToken')
    protected repository: Repository<SO>,
  ) {
    super();
  }

  public async findOneById(id: string): Promise<SO> {
    console.log('findOneById ' + id);
    this.repository.findByIds;
    const so = this.repository
      .createQueryBuilder('so')
      .select()
      .where('so.cdefine34=:cond')
      .orderBy('so.cdefine34')
      .setParameters({ cond: id })
      .getOne();
    return so;
    // console.log('r=id');
    // return this.repository.findOne({where:{id:id},order:{id:"ASC"}});
  }
  public async findOne(
    conditions?: FindConditions<SO>,
    options?: FindOneOptions<SO>,
  ): Promise<SO> {
    console.log('find one ' + JSON.stringify(conditions));
    // this.repository.findByIds
    const jno = conditions.jno;
    // console.log('jno:' + jno);
    const so = this.repository
      .createQueryBuilder('so')
      .select()
      .where('so.cdefine31=:cond')
      .setParameters({ cond: jno })
      .getOne();
    return so;
    // return this.repository.findOne(id);
  }
  public async findOneByJno(jno: string): Promise<SO> {
    // console.log('jno:' + jno);
    const so = this.repository
      .createQueryBuilder('so')
      .select()
      .where('so.cdefine31=:cond')
      .setParameters({ cond: jno })
      .getOne();
    return so;
    // return this.repository.findOne(id);
  }
}

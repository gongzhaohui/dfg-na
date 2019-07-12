import { Column, BaseEntity, Entity, PrimaryColumn } from 'typeorm';
// import {ApiModelProperty} from '@nestjs/swagger';

@Entity()
export class SupperEntity extends BaseEntity {
  @PrimaryColumn({ type: 'int' })
  id: number;
}

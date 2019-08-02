import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
// import { SupperEntity } from '../base';

@Entity('dfg_na_process')
export class ProcessEntity {
  @PrimaryColumn()
  id: number;
  @Column()
  opseq: string;
  @Column()
  opid: number;
  @Column()
  opdesc: string;
  @Column()
  wcid: number;
  @Column()
  resqty: number;
}

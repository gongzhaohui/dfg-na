import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
// import { SupperEntity } from '../base';

@Entity('dfg_na_mo')
export class MoEntity {
  @PrimaryColumn()
  id: number;
  @Column()
  moid: number;
  @Column()
  soser: string;
  @Column()
  moser: string;
  @Column()
  cinvcode: string;
  @Column()
  iquantity: number;
  @Column()
  okquantity: number;
  @Column()
  isodid: number;
  @Column()
  creator?: string;
  @Column()
  created?: Date;
}

import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
// import { SupperEntity } from '../base';

@Entity('dfg_na_so')
export class SoEntity {
  @PrimaryColumn()
  id: number;
  @Column()
  soser: string;
  @Column()
  cinvcode: string;
  @Column()
  iquantity: number;
  @Column()
  unitprice: number;
  @Column()
  ccuscode: string;
  @Column()
  delivery: Date;
  @Column()
  creator: string;
  @Column()
  created: Date;

}

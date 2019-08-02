import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
// import { SupperEntity } from '../base';

@Entity('dfg_na_allocate')
export class AllocateEntity {
  @PrimaryColumn({ generated: true })
  id: number;
  @Column()
  isodid: number;
  @Column()
  modid: number;
  @Column()
  cinvcode: string;
  @Column()
  iquantity: number;
  @Column()
  issqty: number;
}

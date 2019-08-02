import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Inventory } from './inventory.entity';
// import { SupperEntity } from '../base';

@Entity('dfg_na_rdsins10')
export class RdsIn10 {
  @PrimaryColumn()
  id: number;
  @Column()
  rdate: Date;
  @Column()
  cinvcode: string;
  @Column()
  qty: number;
  @Column()
  unitcost: number;
  @Column()
  jno: string;
  @ManyToOne(type => Inventory)
  @JoinColumn({ name: 'cinvcode', referencedColumnName: 'cinvcode' })
  inv: Inventory;
  @Column()
  rn: number;
}

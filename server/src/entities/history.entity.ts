import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn } from 'typeorm';
import { SupperEntity } from '../base';
import { Inventory } from './inventory.entity';

@Entity('dfg_na_history')
export class History {
  @PrimaryColumn({ type: 'int', name: 'isodid' })
  isodid: number;

  @Column({ type: 'nvarchar', length: 14, name: 'jno' })
  jno: string;
  @Column({ type: 'nvarchar', length: 14, name: 'mno' })
  mno: string;
  @Column({ type: 'nvarchar', length: 60, name: 'ccuscode' })
  cuscode: string;
  @Column({ type: 'nvarchar', length: 255, name: 'ccusabbname' })
  cusname: string;
  @OneToOne(type => Inventory)
  @JoinColumn({name:'cinvcode'})
  inventory: Inventory;
  @Column({ type: 'int'})
  qty: number;
  @Column({ type: 'smalldatetime', name: 'ddate' })
  ddate: number;
  @Column({ type: 'smalldatetime', name: 'mdate' })
  mdate: number;
  @Column({ type: 'int', name: 'moid' })
  moid: number;
}

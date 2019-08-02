import { Entity, Column, PrimaryColumn, OneToMany, JoinColumn } from 'typeorm';
import { RdsIn10 } from './rdsin10.entity';
import { RdsIn } from './rdsin.entity';
// import { SupperEntity } from '../base';

@Entity('dfg_na_inventory')
export class Inventory {
  @PrimaryColumn({ type: 'nvarchar', name: 'cinvcode' })
  cinvcode: string;

  @Column({ type: 'nvarchar', length: 14, name: 'cinvccode' })
  cinvccode: string;
  @Column({ type: 'nvarchar', length: 60, name: 'cinvstd' })
  cinvstd: string;
  @Column({ type: 'nvarchar', length: 255, name: 'cinvname' })
  cinvname: string;
  @Column({ type: 'nvarchar', length: 60, name: 'cinvaddcode' })
  cinvaddcode: string;
  @Column({ type: 'nvarchar', length: 255, name: 'cinvcname' })
  cinvcname: string;
  @Column({ type: 'int', name: 'partid' })
  partid: number;
  @Column({ type: 'float', name: 'unitcost' })
  unitcost: number;
  @Column({ type: 'bit', name: 'isbuying' })
  isbuying: number;
  @OneToMany(type => RdsIn, rdsin => rdsin.inv)
  @JoinColumn({ name: 'cinvcode', referencedColumnName: 'cinvcode' })
  rdsins: RdsIn[];
  @OneToMany(type => RdsIn10, rdsin => rdsin.inv)
  @JoinColumn({ name: 'cinvcode', referencedColumnName: 'cinvcode' })
  rdsins10: RdsIn10[];
}

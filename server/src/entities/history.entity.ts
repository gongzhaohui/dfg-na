import { Entity, Column,  PrimaryColumn } from 'typeorm';
import { SupperEntity } from '../base';

@Entity('dfg_na_history')
export class History extends SupperEntity  {
  @PrimaryColumn({type: 'int', name: 'isodid'})
  isodid: number;

@Column({type: 'nvarchar', length: 14, name: 'jno'})
jno: string;
@Column({type: 'nvarchar', length: 14, name: 'mno'})
mno: string;
@Column({type: 'nvarchar', length: 60, name: 'ccuscode'})
cuscode: string;
@Column({type: 'nvarchar', length: 255, name: 'ccusabbname'})
cusname: string;
@Column({type: 'nvarchar', length: 60, name: 'cinvcode'})
cinvcode: string;
@Column({type: 'nvarchar', length: 60, name: 'cinvaddcode'})
cinvaddcode: string;
@Column({type: 'nvarchar', length: 60, name: 'cinvstd'})
cinvstd: string;
@Column({type: 'int',  name: 'iquantity'})
qty: number;
@Column({type: 'smalldatetime',  name: 'ddate'})
ddate: number;
@Column({type: 'smalldatetime',  name: 'mdate'})
mdate: number;
@Column({type: 'int',  name: 'moid'})
moid: number;
}

import { Entity, Column,  PrimaryColumn } from 'typeorm';
import { SupperEntity } from '../base';

@Entity('dfg_tyuzan')
export class History extends SupperEntity  {
  @PrimaryColumn({type: 'int', name: 'cdefine34'})
  id: number;

@Column({type: 'nvarchar', length: 14, name: 'cdefine31'})
jno: string;
@Column({type: 'nvarchar', length: 60, name: 'ccuscode'})
cuscode: string;
@Column({type: 'nvarchar', length: 255, name: 'ccusabbname'})
cusname: string;
@Column({type: 'nvarchar', length: 60, name: 'cinvaddcode'})
cinvaddcode: string;
@Column({type: 'nvarchar', length: 60, name: 'cinvstd'})
cinvstd: string;
@Column({type: 'int',  name: 'iquantity'})
qty: number;
}

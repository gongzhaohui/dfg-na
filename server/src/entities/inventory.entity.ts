import { Entity, Column,  PrimaryColumn } from 'typeorm';
import { SupperEntity } from '../base';

@Entity('dfg_na_inventory')
export class Inventory extends SupperEntity  {
  @PrimaryColumn({type: 'nvarchar', name: 'cinvcode'})
  cinvcode: string;

@Column({type: 'nvarchar', length: 14, name: 'cinvccode'})
cinvccode: string;
@Column({type: 'nvarchar', length: 60, name: 'cinvstd'})
cinvstd: string;
cinvname: string;
@Column({type: 'nvarchar', length: 60, name: 'cinvaddcode'})
@Column({type: 'nvarchar', length: 255, name: 'cinvname'})
cinvaddcode: string;
@Column({type: 'nvarchar', length: 255, name: 'cinvcname'})
cinvcname: string;
@Column({type: 'int',  name: 'partid'})
partid: number;
}

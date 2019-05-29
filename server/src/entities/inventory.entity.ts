import { Entity, Column,  PrimaryColumn } from 'typeorm';
// import { SupperEntity } from '../base';

@Entity('dfg_na_inventory')
export class Inventory {
  @PrimaryColumn({type: 'nvarchar', name: 'cinvcode'})
  cinvcode: string;

@Column({type: 'nvarchar', length: 14, name: 'cinvccode'})
cinvccode: string;
@Column({type: 'nvarchar', length: 60, name: 'cinvstd'})
cinvstd: string;
@Column({type: 'nvarchar', length: 255, name: 'cinvname'}
)cinvname: string;
@Column({type: 'nvarchar', length: 60, name: 'cinvaddcode'})
cinvaddcode: string;
@Column({type: 'nvarchar', length: 255, name: 'cinvcname'})
cinvcname: string;
@Column({type: 'int',  name: 'partid'})
partid: number;
}

import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('dfg_na_orderinfo')
export class OrderInfo {
  @PrimaryColumn({ type: 'int' })
  isodid: number;

  @Column({ type: 'nvarchar', length: 14})
  jno: string;

  @Column({ type: 'nvarchar', length: 60 })
  cinvcode: string;
  @Column({ type: 'nvarchar', length: 60 })
  cinvstd: string;
  @Column({ type: 'nvarchar', length: 60})
  cinvaddcode: string;

  @Column({ type: 'nvarchar', length: 255})
  ccusabbname: string;
  
  @Column({ type: 'int' })
  qty: number;
  
  @Column({ type: 'smalldatetime'})
  dpredate: Date;

}

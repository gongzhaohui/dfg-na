import { Entity, Column, PrimaryColumn} from 'typeorm';
// import { SupperEntity } from '../base';

@Entity('dfg_na_log_history')
export class LogHistory {
  @PrimaryColumn({ generated: true })
  id: number;
  @Column({ type: 'nvarchar', length: 14 })
  jno: string;
  @Column({ type: 'int' })
  isodid: number;
  @Column({ type: 'int' })
  operation: number;
  @Column({ type: 'nvarchar', length: 20 })
  operator: string;
  @Column({ type: 'int'})
  qty: number;
  @Column({ type: 'smalldatetime' })
  log_date?: Date;
  @Column({ type: 'bit' ,default:true })
  active?: boolean;

}
@Entity('dfg_na_log_List')
export class LogList {
  @PrimaryColumn({ generated: false })
  id: number;
  @Column({ type: 'nvarchar', length: 14 })
  jno: string;
  @Column({ type: 'int' })
  isodid: number;
  @Column({ type: 'int' })
  operation: number;
  
  @Column({ type: 'nvarchar', length: 20 })
  operator: string;
  @Column({ type: 'nvarchar', length: 20 })
  cname: string;

  @Column({ type: 'int'})
  qty: number;
  @Column({ type: 'smalldatetime' })
  log_date?: Date;
  @Column({ type: 'bit' ,default:true })
  active?: boolean;

  @Column({ type: 'nvarchar', length: 60 })
  cinvcode: string;
  @Column({ type: 'nvarchar', length: 60 })
  cinvstd: string;
  @Column({ type: 'nvarchar', length: 60})
  cinvaddcode: string;

  @Column({ type: 'nvarchar', length: 255})
  ccusabbname: string;
  
  @Column({ type: 'int' })
  ordqty: number;
  
  @Column({ type: 'smalldatetime'})
  dpredate: Date;


}

import { Entity, Column, PrimaryColumn} from 'typeorm';
// import { SupperEntity } from '../base';

@Entity('dfg_na_operator')
export class Operator {
  @PrimaryColumn({ type: 'nvarchar', length: 20})
  cuser_id: string;
  @Column({ type: 'nvarchar', length: 40})
  name: string;
  @Column({ type: 'nvarchar', length: 12})
  dept: string;

}

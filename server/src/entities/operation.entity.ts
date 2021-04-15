import { Entity, Column, PrimaryColumn} from 'typeorm';
// import { SupperEntity } from '../base';

@Entity('dfg_na_operation')
export class Operation {
  @PrimaryColumn({ generated: true })
  id: number;
  @Column({ type: 'nvarchar', length: 20})
  name: string;
  @Column({ type: 'nvarchar', length: 20 })
  department?: string;


}

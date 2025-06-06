import { Column, Entity, PrimaryColumn } from "typeorm";

// import { SupperEntity } from '../base';

@Entity('dfg_na_operation')
export class Operation {
  @PrimaryColumn()
  id: number;
  @Column({ type: 'nvarchar', length: 20})
  name: string;
  @Column({ type: 'nvarchar', length: 20 })
  department?: string;


}

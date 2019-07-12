import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('dfg_na_hourrate')
export class HourRate {
  @PrimaryColumn()
  id: number;
  @Column()
  cinvccode: string;
  @Column()
  period: string;
  @Column()
  hourrate: number;
}

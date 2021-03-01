import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
// import { SupperEntity } from '../base';

@Entity('dfg_na_pd')
export class RegHistory {
  @PrimaryColumn({ generated: true })
  id: number;
  @Column()
  barcode: string;
   @Column()
  sodid?: number;
  @Column()
  location?: string;
  @Column()
  qty: number;
  @Column()
  category: string;
  @Column()
  period: string;
  @Column()
  creator?: string;
  @Column()
  created?: Date;
  @Column()
  updateed?: Date;
}

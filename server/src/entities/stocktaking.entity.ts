import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
// import { SupperEntity } from '../base';

@Entity('dfg_na_pd')
export class StockTaking {
  @PrimaryColumn({ generated: true })
  id: number;
  @Column()
  barcode: string;
  @Column()
  soser?: string;
  @Column()
  moser?: string;
  @Column()
  location?: string;
  @Column()
  sodid?: number;
  @Column()
  modid?: number;
  @Column()
  pds: number;
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

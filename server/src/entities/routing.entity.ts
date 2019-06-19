import {
  Entity,
  Column,
  PrimaryColumn,
  OneToMany,
  JoinColumn,
  OneToOne,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Inventory } from './inventory.entity';
import { BomItem } from './bomitem.entity';

@Entity('dfg_na_routing')
export class Routing {
  @PrimaryColumn()
  id: number;
  @Column()
  partid: number;
  @Column()
  opseq: string;
  @Column()
  opname: string;
  @Column()
  remark: string;
  @Column()
  resqty: number;
  @ManyToOne(type => BomItem, item => item.routings)
  @JoinColumn({ name: 'partid', referencedColumnName: 'partid' })
  bomitem: BomItem;
}

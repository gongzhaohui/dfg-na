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
import { Routing } from './routing.entity';

@Entity('dfg_na_bom_base')
export class BomItem {
  @PrimaryColumn()
  id: number;
  @Column()
  parentbomid: number;
  @Column()
  partid: number;
  @OneToOne(type => Inventory, inventory => inventory.partid)
  @JoinColumn({ name: 'partid', referencedColumnName: 'partid' })
  inv: Inventory;
  @Column()
  childbomid: number;
  @Column()
  unitqty: number;
  @Column()
  qty: number;
  @Column()
  lvl: string;
  @ManyToOne(type => BomItem, parent => parent.children)
  @JoinColumn({ name: 'parentbomid', referencedColumnName: 'childbomid' })
  parent: BomItem;
  @OneToMany(type => BomItem, children => children.parent)
  children: BomItem[];
  @OneToMany(type => Routing, routing => routing.bomitem)
  @JoinColumn({ name: 'partid', referencedColumnName: 'partid' })
  routings: Routing[];
}

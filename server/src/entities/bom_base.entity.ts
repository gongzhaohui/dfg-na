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

@Entity('dfg_na_bom_base')
export class BomBase {
  @PrimaryGeneratedColumn()
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
  @ManyToOne(type => BomBase, parent => parent.children)
  @JoinColumn({ name: 'parentbomid', referencedColumnName: 'childbomid' })
  parent: BomBase;
  @OneToMany(type => BomBase, children => children.parent)
  children: BomBase[];
}

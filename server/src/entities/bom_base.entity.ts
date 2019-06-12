import {
  Entity,
  Column,
  PrimaryColumn,
  OneToMany,
  JoinColumn,
  OneToOne,
  ManyToOne,
} from 'typeorm';
import { Inventory } from './inventory.entity';

@Entity('dfg_na_bom_base')
export class BomBase {
  @PrimaryColumn()
  id: number;
  @Column()
  partid: number;
  @OneToOne(type => Inventory, inventory => inventory.partid)
  @JoinColumn({ name: 'partid', referencedColumnName: 'partid' })
  inv: Inventory;
  @Column()
  bomid: number;
  @Column()
  unitqty: number;
  @Column()
  qty: number;
  @Column()
  lvl: string;
  @ManyToOne(type => BomBase, parent => parent.children)
  @JoinColumn({ name: 'id', referencedColumnName: 'bomid' })
  parent: BomBase;
  @OneToMany(type => BomBase, child => child.parent)
  @JoinColumn({ name: 'bomid', referencedColumnName: 'id' })
  children: BomBase[];
}

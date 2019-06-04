import {
  Entity,
  Column,
  PrimaryColumn,
  Tree,
  TreeParent,
  TreeChildren,
  OneToOne,
  JoinColumn,
  OneToMany,
  BaseEntity,
} from 'typeorm';
import { Inventory } from './inventory.entity';
import { BomChild } from './bom_child.entity';
import { BomBase } from './bom_base.entity';
// import { SupperEntity } from '../base';

@Entity('dfg_na_bom_parent')
// @Tree('materialized-path')
export class BomParent {
  @PrimaryColumn({ type: 'int', name: 'id' })
  id: number;
  @Column()
  parent: number;
  @OneToOne(type => Inventory, inventory => inventory.partid)
  @JoinColumn({ name: 'parent',referencedColumnName:'partid' })
  inv: Inventory;
  @Column()
  qty: number;
  @Column()
  lvl: string;
  @OneToMany(type => BomChild, child => child.bomid)
  @JoinColumn({name: 'id',referencedColumnName:'bomid'})
  children: BomChild[];
}

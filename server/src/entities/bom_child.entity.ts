import {
  Entity,
  Column,
  PrimaryColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
  BaseEntity,
  OneToMany,
} from 'typeorm';
import { Inventory } from './inventory.entity';
import { BomParent } from './bom_parent.entity';
import { BomBase } from './bom_base.entity';
// import { SupperEntity } from '../base';

@Entity('dfg_na_bom_p_m')
export class BomChild  {
  @PrimaryColumn({ type: 'int', name: 'id' })
  id: number;
  @ManyToOne(type => BomParent, parent => parent.children)
  @JoinColumn({name: 'bomid'})
  bomid: number;
  @OneToOne(type => BomParent,parent=>parent.id)
  @JoinColumn({name: 'cbomid'})
  cbomid: number;
  @Column()
  seq: string;
  @OneToOne(type => Inventory, inventory => inventory.partid)
  @JoinColumn({ name: 'child', referencedColumnName: 'partid' })
  child: Inventory;
  @Column()
  parentqty: number;
  @Column()
  unitqty: number;
  @Column()
  qty: number;
  @OneToMany(type => BomChild, child => child.bomid)
  @JoinColumn({name: 'cbomid',referencedColumnName:'bomid'})
  children: BomChild[];
}

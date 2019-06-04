import { Entity, Column, PrimaryColumn, OneToMany, JoinColumn, OneToOne } from 'typeorm';
import { Inventory } from './inventory.entity';

@Entity()
export  class BomBase {
  @PrimaryColumn()
  id: number;
  @Column()
  partid: number;
  @OneToOne(type => Inventory, inventory => inventory.partid)
  @JoinColumn({ name: 'partid',referencedColumnName:'partid' })
  inv: Inventory;
  @Column()
  bomid: number;
  @Column()
  qty: number;
  @Column()
  lvl: string;
  @OneToMany(type => BomBase, child => child.bomid)
  @JoinColumn({name: 'id',referencedColumnName:'bomid'})
  children: BomBase[];
}

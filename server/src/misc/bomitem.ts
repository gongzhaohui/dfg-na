import { Inventory } from "entities/inventory.entity";

export class BomItem{
  inv:Inventory;
  lvl:string;
  qty:number;
  children:BomItem[]
}
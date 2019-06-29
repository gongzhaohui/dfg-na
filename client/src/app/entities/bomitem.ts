import { Routing } from './routing';
import { Inventory } from './inventory';

export class BomItem {
  parentbomid: number;
  partid: number;
  moid: number;
  childbomid: number;
  inv: Inventory;
  unitqty: number;
  qty: number;
  lvl: string;
  routings?: Routing[];
  children?: BomItem[];
  amount?:number;
  expend:boolean=false;
}

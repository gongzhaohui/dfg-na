import { Routing } from './routing';
import { Inventory } from './inventory';

export class BomPlan {
  parentbomid: number;
  partid: number;
  moid: number;
  childbomid: number;
  inv: Inventory;
  unitqty: number;
  qty: number;
  lvl: string;
  routings?: Routing[];
  children?: BomPlan[];
  expend:boolean=false;
}

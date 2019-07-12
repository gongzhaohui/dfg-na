import { Routing } from './routing';
import { Inventory } from './inventory';

export class Bom_M {
    parentbomid: number;
    partid: number;
    moid: number;
    childbomid: number;
    inv: Inventory;
    unitqty;
    qty: number;
    routingid: number;
    bpurchase: boolean;
    bself: boolean;
    routings: Routing[];
}

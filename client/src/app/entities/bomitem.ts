import { Inventory } from './inventory';
import { Routing } from './routing';

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
    amount?: number;
    expand: boolean = false;
}

import { Inventory } from './inventory';

export class HistoryItem {
    jno: string;
    isodid: number;
    mno: string;
    moid: number;
    inventory: Inventory;
    ddate: Date;
    mdate: Date;
    ccusabbname: string;
    sounitprice: number;
}

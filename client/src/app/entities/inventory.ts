import { Rdsin } from './rdsin';

export class Inventory {
    cinvcode: string;
    cinvccode: string;
    cinvstd: string;
    cinvaddcode: string;
    cinvname: string;
    cinvcname: string;
    partid: number;
    unitcost?: number;
    isbuying: boolean;
    rdsins?: Rdsin[];
    rdsins10?: Rdsin[];
}

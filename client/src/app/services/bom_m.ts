import { Routing } from './routing';

export class Bom_M{
  bomid:number;
  fatherid:number;
  moid:number;
  childid:number;
  cinvcode:string;
  cinvname:string;
  cinvstd:string;
  quantity :number;
  routingid:number;
  bpurchase:boolean;
  bself:boolean;
  routings:Routing[];
}

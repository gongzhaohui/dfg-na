import { Component, OnInit } from '@angular/core';
import { HistoryService } from './services/history.service';
import { HistoryItem } from './entities/historyitem';
import { Inventory } from './entities/inventory';
import { Rdsin } from './entities/rdsin';
import { HourRateService } from './services/hourrate.service';
import { HourRate } from './entities/hourrate';
import { PeriodService } from './services/period.service';
import { BomItem } from './entities/bomitem';
import { BomPlanService } from './services/bom_plan.service';
import { concatMap, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DFG NA';
  searchType = 'cinvcode';
  term = '';
  history: HistoryItem[] = [];
  inventory: Inventory;
  invccode: string;
  mess: string = '';
  bom: BomItem[] = [];
  bom_m: BomItem[];
  bom_p: BomItem[];
  hourRate: HourRate;
  period: string;
  cost: number ;
  cost_m: number;
  cost_p: number;

  constructor(
    // private iService: InventoryService,
    private hService: HistoryService,
    // private rService: RdsinService,
    private hrService: HourRateService,
    private pService: PeriodService,
    private bomPlanService: BomPlanService
  ) {}
  ngOnInit(): void {
    this.period = this.pService.GetPeriod(new Date());
  }
  Search() {
    // this.GetInventory();
    this.bom = [];
    this.history = [];
    this.mess = '数据查询中...';
    this.GetHistory();
    this.GetBomPlan();
    // this.GetBom();
    // this.GetRdsIn();
  }
  GetBomPlan() {
    this.mess = 'BOM数据查询中...';
    this.bomPlanService
      .GetManufactureBom(this.searchType, this.term)
      .pipe(
        concatMap((bp, i) => {
          this.mess = 'BOM数据查询完成。';
          this.inventory = bp.inv;
          this.bom = [];

          this.getChildren(bp);
          this.bom_m = this.bom.filter(
            _ =>
              (_.lvl === '1' && !_.inv.isbuying) ||
              (_.routings && _.routings.length > 0)
          );
          this.bom_p = this.bom.filter(
            _ =>
              // _.lvl !== '1' ||
              _.inv.isbuying
            // ||
            // (!_.children || _.children.length === 0)
          );

          // console.log('bom_p:' + JSON.stringify(this.bom_p));
          this.mess = '小时单价查询中...';
          return this.hrService.GetHourrate(
            this.inventory.cinvccode.substr(0, 6),
            this.period
          );
        })
      )
      .subscribe(hr => {
        this.mess = '小时单价完成。';
        this.hourRate = hr;
        // console.log('hr:'+JSON.stringify(this.hourRate));
        this.CalcCost();
      });
    // throw new Error("Method not implemented.");
  }
  CalcCost() {
    this.mess = '成本计算中...';
    this.cost_m = 0;
    this.bom_m.forEach((b, i) => {
      b.routings.forEach((r, i) => {
        this.cost_m += (r.resqty / 60) * this.hourRate.hourrate;
        // console.log(r.routingdid+'.hour:'+JSON.stringify(r));
      });
      // console.log(b.lvl+'.rcost;'+this.cost);
    });
    this.cost_p = 0;
    this.bom_p.forEach((v, i) => {
      this.cost_p += v.qty * v.inv.unitcost;
    });
    this.cost = this.cost_m + this.cost_p;
    this.mess = '数据查询完成.';
  }
  getChildren(parent: BomItem) {
    let child = new BomItem();
    Object.assign(child, parent);
    // console.log('bp:'+JSON.stringify(bp));
    delete child.children;
    // child.
    // console.log('bp:'+JSON.stringify(bp));
    this.bom.push(child);
    if (parent.children && parent.children.length > 0) {
      parent.children.forEach(c => {
        this.getChildren(c);
      });
    }
  }

  GetHistory() {
    this.hService.GetHistory(this.searchType, this.term).subscribe(h => {
      this.history = h;
      // console.log('his:' + JSON.stringify(this.history));
    });
  }
}

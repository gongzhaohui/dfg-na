import { Component, OnInit } from '@angular/core';
import { HistoryService } from './services/history.service';
import { HistoryItem } from './entities/historyitem';
import { Inventory } from './entities/inventory';
import { Bom_M } from './entities/bom_m';
import { InventoryService } from './services/inventory.service';
import { BomService } from './services/bom_m.service';
import { RdsinService } from './services/rdsin.service';
import { Rdsin } from './entities/rdsin';
import { HourRateService } from './services/hourrate.service';
import { HourRate } from './entities/hourrate';
import { PeriodService } from './services/period.service';
import { BomPlan } from './entities/bom_plan';
import { BomPlanService } from './services/bom_plan.service';

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
  bom: BomPlan[] = [];
  bom_m: Bom_M[];
  bom_p: Bom_M[];
  rdsIn: Rdsin[];
  hourRate: HourRate;
  period: string;
  cost: number = 0;

  constructor(
    private iService: InventoryService,
    private hService: HistoryService,
    private bService: BomService,
    private rService: RdsinService,
    private hrService: HourRateService,
    private pService: PeriodService,
    private bomPlanService: BomPlanService
  ) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.period = this.pService.GetPeriod(new Date());
  }
  Search() {
    // this.GetInventory();
    this.GetHistory();
    this.GetBomPlan();
    // this.GetBom();
    // this.GetRdsIn();
  }
  GetBomPlan() {
    this.bomPlanService
      .GetManufactureBom(this.searchType, this.term)
      .subscribe(bp => {
        this.inventory = bp.inv;
        this.getChildren(bp);
        this.cost=this.CalcCost(bp);
        // console.log('bom:' + JSON.stringify(this.bom_plan_m));
      });
    // throw new Error("Method not implemented.");
  }
  CalcCost(bp: BomPlan): number {
    return 100.0;
  }
  getChildren(bp: BomPlan) {
    let child = new BomPlan();
    Object.assign(child,bp);
    // console.log('bp:'+JSON.stringify(bp));
    delete child.children;
    // child.
    // console.log('bp:'+JSON.stringify(bp));
    this.bom.push(child);
    if (bp.children && bp.children.length > 0) {
      bp.children.forEach(c => {
        this.getChildren(c);
      });
    }
  }
  GetBom() {
    this.bService.GetBom(this.searchType, this.term).subscribe(b => {
      this.bom_m = b;
    });
  }
  GetRdsIn() {
    this.rService
      .GetRdsIn(this.searchType, this.term)
      .subscribe(rds => (this.rdsIn = rds));
  }
  GetHistory() {
    this.hService
      .GetHistory(this.searchType, this.term)
      .subscribe(h => (this.history = h));
  }

  GetInventory() {
    this.iService.GetInventory(this.searchType, this.term).subscribe(inv => {
      this.inventory = inv;
      this.invccode = inv.cinvccode;
      this.GetHourRate(this.inventory.cinvccode);
    });
  }
  GetHourRate(cinvccode: string) {
    this.hrService.GetHourrate(cinvccode).subscribe(hr => (this.hourRate = hr));
  }
}

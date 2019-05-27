import { Component, OnInit } from '@angular/core';
import { HistoryService } from './services/history.service';
import { HistoryItem } from './services/historyitem';
import { Inventory } from './services/inventory';
import { Bom } from './services/bom_m';
import { InventoryService } from './services/inventory.service';
import { BomService } from './services/bom_m.service';
import { RdsinService } from './services/rdsin.service';
import { Rdsin } from './services/rdsin';
import { HourrateService } from './services/hourrate.service';
import { Hourrate } from './services/hourrate';
import { PeriodService } from './services/period.service';

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
  bom_m: Bom[];
  bom_p: Bom[];
  rdsIn: Rdsin[];
  hourRate: Hourrate;
  period: string;
  cost:number=0;

  constructor(
    private iService: InventoryService,
    private hService: HistoryService,
    private bService: BomService,
    private rService: RdsinService,
    private hrService: HourrateService,
    private pService: PeriodService
  ) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.period = this.pService.GetPeriod(new Date());
  }
  Search() {
    this.GetInventory();
    this.GetHistory();
    this.GetBom();
    this.GetRdsIn();
    // switch (this.searchType) {
    //   case 'jno': {
    //     this.SearchByJno();
    //     break;
    //   }
    //   case 'mno': {
    //     this.SearchByMno();
    //     break;
    //   }
    //   default: {
    //     this.SearchByInv();
    //   }
    // }
    // this.hService
    //   .GetHistory(this.searchType, this.term)
    //   .subscribe(h => (this.history = h));
  }
  GetBom() {
    this.bService.GetBom(this.searchType, this.term).subscribe(b=>this.bom_m=b);
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

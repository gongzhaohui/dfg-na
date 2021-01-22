import {
    Component,
    OnInit,
    AfterViewInit,
    ViewChild,
    ElementRef,
} from '@angular/core';
import { HistoryService } from '../../services/history.service';
import { HistoryItem } from '../../entities/historyitem';
import { Inventory } from '../../entities/inventory';
import { HourRateService } from '../../services/hourrate.service';
import { HourRate } from '../../entities/hourrate';
import { PeriodService } from '../../services/period.service';
import { BomItem } from '../../entities/bomitem';
import { BomPlanService } from '../../services/bom_plan.service';
import { concatMap } from 'rxjs/operators';
import { NzNotificationService } from 'ng-zorro-antd';
import { Rdsin } from '../../entities/rdsin';
@Component({
    selector: 'dfg-cost',
    templateUrl: './cost.component.html',
    styleUrls: ['./cost.component.css'],
})
export class CostComponent implements OnInit, AfterViewInit {
    title = 'DFG NA';
    searchType = 'cinvcode';
    term = '';
    history: HistoryItem[] = [];
    rdsins: Rdsin[] = [];
    inventory: Inventory;
    invccode: string;
    mess = '';
    bom: BomItem[] = [];
    bom_m: BomItem[];
    bom_p: BomItem[];
    hourRate: HourRate;
    period: string;
    cost: number;
    cost_m: number;
    cost_p: number;
    @ViewChild('invcode', { static: true })
    invcodeElement: ElementRef;

    constructor(
        // private iService: InventoryService,
        private hService: HistoryService,
        // private rService: RdsinService,
        private hrService: HourRateService,
        private pService: PeriodService,
        private bomPlanService: BomPlanService,
        private notiSvr: NzNotificationService
    ) {}
    ngOnInit(): void {
        this.period = this.pService.GetPeriod(new Date());
    }
    ngAfterViewInit(): void {
        this.invcodeElement.nativeElement.focus();
    }
    onInvcodeFocus(): void {
        this.invcodeElement.nativeElement.select();
    }
    Search() {
        this.bom = [];
        this.history = [];
        //  = '数据查询中...';
        this.notiSvr.info('status', '数据查询中...');
        this.GetHistory();
        this.GetBomPlan();
    }
    GetBomPlan() {
        //  = 'BOM数据查询中...';
        this.notiSvr.info('status', 'BOM数据查询中。。。');
        this.bomPlanService
            .GetManufactureBom(this.searchType, this.term)
            .pipe(
                concatMap((bp, i) => {
                    //  = 'BOM数据查询完成。';
                    this.notiSvr.info('status', 'BOM数据查询完成。');
                    if (bp && bp.inv) {
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
                        //  = '小时单价查询中...';
                        this.notiSvr.info('status', '小时单价查询中。。。');
                        return this.hrService.GetHourrate(
                            this.inventory.cinvccode.substr(0, 6),
                            this.period
                        );
                    } else {
                        this.notiSvr.warning('status', '未查询到有效BOM。');
                        return [];
                    }
                })
            )
            .subscribe(hr => {
                //  = '小时单价完成。';
                this.notiSvr.info('status', '小时单价查询完成。');
                this.hourRate = hr?hr:{hourrate:1};
                // console.log('hr:'+JSON.stringify(this.hourRate));
                this.CalcCost();
            });
        // throw new Error("Method not implemented.");
    }
    CalcCost() {
        //  = '成本计算中...';
        this.notiSvr.info('status', '成本计算中。。。');
        this.cost_m = 0;
        this.bom_m.forEach((b, i) => {
            b.routings.forEach((r, i) => {
                r.amount = (r.resqty / 60) * this.hourRate.hourrate;
                this.cost_m += (r.resqty / 60) * this.hourRate.hourrate;
                // console.log(r.routingdid+'.hour:'+JSON.stringify(r));
            });
            // console.log(b.lvl+'.rcost;'+this.cost);
        });
        this.cost_p = 0;
        this.bom_p.forEach((v, i) => {
            v.amount = v.qty * v.inv.unitcost;
            this.cost_p += v.qty * v.inv.unitcost;
        });
        this.cost = this.cost_m + this.cost_p;
        //  = '数据查询完成.';
        this.notiSvr.info('status', '查询完成。');
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
        this.notiSvr.info('status', '历史记录查询中。。。');
        this.hService.GetHistory(this.searchType, this.term).subscribe(h => {
            this.notiSvr.info('status', '历史记录查询完成。');
            if (h) {
                this.history = h;
                if (
                    h[0].inventory &&
                    (h[0].inventory.rdsins || h[0].inventory.rdsins10)
                ) {
                    this.rdsins =
                        (h[0].inventory.rdsins || []).concat(
                            h[0].inventory.rdsins10
                        ) || [];
                }
            }
        });
    }
}

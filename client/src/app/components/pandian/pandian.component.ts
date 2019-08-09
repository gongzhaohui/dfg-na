import { Component, OnInit, ViewChild } from '@angular/core';
import { StockTakingService } from '../../services/stocktaking.service';
import { StockTaking } from '../../entities/stocktaking.entity';
import { PdInputComponent } from '../pdinput/pdinput.component';
import { PdEditComponent } from '../pdedit/pdedit.component';

@Component({
    selector: 'dfg-pandian',
    templateUrl: './pandian.component.html',
    styleUrls: ['./pandian.component.css'],
})
export class PandianComponent implements OnInit {
    constructor(private pandianSvc: StockTakingService) {}
    title = 'pandian';
    @ViewChild(PdInputComponent, { static: true }) inputCmp: PdInputComponent;
    @ViewChild(PdEditComponent, { static: true }) editCmp: PdEditComponent;
    ngOnInit(): void {
    }
    submitPdData(pandianData: StockTaking): void {
        this.editCmp.loading = true;
        this.pandianSvc.add(pandianData).subscribe(result => {
            if (result) {
                this.editCmp.pdData.push(result);
                this.editCmp.tabComp.data = this.editCmp.pdData;
                this.editCmp.loading = false;
            }
        });
    }
    loadPdData() {
        const period = this.inputCmp.inputForm.value.period;
        const category = this.inputCmp.inputForm.value.category;
        const creator = this.inputCmp.inputForm.value.creator;
        this.editCmp.loading = true;
        this.pandianSvc.getList(period, category, creator).subscribe(list => {
            this.editCmp.pdData = list;
            this.editCmp.loading = false;
        });
    }
}

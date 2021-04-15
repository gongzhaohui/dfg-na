import {
    Component,
    OnInit,
    AfterViewInit,
    ViewChild,
} from '@angular/core';
import { StockTaking } from '../../../entities/stocktaking.entity';
import { StockTakingService } from 'src/app/services/stocktaking.service';
import { NzTableComponent } from 'ng-zorro-antd/table';

@Component({
    selector: 'dfg-pdedit',
    templateUrl: './pdedit.component.html',
    styleUrls: ['./pdedit.component.css'],
})
export class PdEditComponent implements OnInit, AfterViewInit {
    @ViewChild('basicTable', { static: true })
    tabComp: NzTableComponent;
    pdData: StockTaking[];
    editId: number | null;
    _editCache = new Map();
    pageIndex = 1;
    pageSize = 10;
    total = 0;
    loading = false;
    constructor(private pandianSvc: StockTakingService) {}

    ngOnInit() {
        this.pdData = [];
    }
    ngAfterViewInit() {
        this.tabComp.data = this.pdData;
    }
    cancelEdit(id: number): void {
        const index = this.pdData.findIndex(item => item.id === id);
        this._editCache[id] = {
            data: { ...this.pdData[index] },
            edit: false,
        };
    }

    saveEdit(id: number): void {
        const index = this.pdData.findIndex(item => item.id === id);
        const data = this._editCache[id].data;
        Object.assign(this.pdData[index], data);
        this.pandianSvc.save(data).subscribe(r => {
            this.loading = false;
            Object.assign(this.pdData[index], data);
            this._editCache[id].edit = false;
        });
    }

    startEdit(id: number): void {
        const index = this.pdData.findIndex(item => item.id === id);
        this._editCache[id] = { edit: true, data: { ...this.pdData[index] } };
    }
    deleteRow(id: number): void {
        const index = this.pdData.findIndex(item => item.id === id);
        if (index > -1) {
            this.loading = true;
            this.pandianSvc.removeById(id).subscribe(r => {
                this.pdData.splice(index, 1);
                this.tabComp.data = this.pdData;
                this.total = this.pdData.length;
                this.loading = false;
                if (this._editCache[id]) {
                    this._editCache.delete(id);
                }
            });
        } // this.deleteData.emit(id);
    }
}

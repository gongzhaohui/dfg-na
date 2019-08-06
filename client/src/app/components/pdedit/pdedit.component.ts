import { Component, OnInit, Input, EventEmitter, Output, AfterViewInit, ViewChild } from '@angular/core';
import { StockTaking } from '../../entities/stocktaking.entity';
import { StockTakingService } from 'src/app/services/stocktaking.service';
import { NzTableComponent } from 'ng-zorro-antd';

@Component({
    selector: 'dfg-pdedit',
    templateUrl: './pdedit.component.html',
    styleUrls: ['./pdedit.component.css'],
})
export class PdEditComponent implements OnInit,AfterViewInit {
  @ViewChild('basicTable',{static:true})
    tabComp: NzTableComponent;
    pdData: StockTaking[];
    // @Output() deleteData: EventEmitter<number> = new EventEmitter();
    // @Output() saveData: EventEmitter<StockTaking> = new EventEmitter();
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
    ngAfterViewInit(){
      this.tabComp.data=this.pdData;
    }
    cancelEdit(id: number): void {
        const index = this.pdData.findIndex(item => item.id === id);
        this._editCache[id] = {
            data: { ...this.pdData[index] },
            edit: false,
        };
    }

    saveEdit(id: number): void {
        // this.saveData.emit(this.editCache[id].data);
        const index = this.pdData.findIndex(item => item.id === id);
        const data=this._editCache[id].data;
        Object.assign(this.pdData[index], data);
        this.pandianSvc.save(data).subscribe(r => {
          // this.editCmp.pdData=this.listOfData;
          this.loading=false;
          Object.assign(this.pdData[index], data);
          this._editCache[id].edit=false;
        });
      }

    startEdit(id: number): void {
        const index = this.pdData.findIndex(item => item.id === id);
        this._editCache[id] = { edit: true, data: { ...this.pdData[index] } };
    }
    deleteRow(id: number): void {
        const index = this.pdData.findIndex(item => item.id === id);
        console.log('deleting'+index);
        // console.log()
        if (index > -1) {
            this.loading = true;
            this.pandianSvc.removeById(id).subscribe(r => {
                console.log('del' + index);
                // console.log(this.listOfData);
                this.pdData.splice(index, 1);
                // console.log(this.listOfData);
                // this.editCmp.pdData = this.listOfData;
                this.total = this.pdData.length;
                this.loading = false;
                // this.editCache[id].edit = false;
                if (this._editCache[id]) {
                    this._editCache.delete(id);
                }
            });
        } // this.deleteData.emit(id);
    }

}

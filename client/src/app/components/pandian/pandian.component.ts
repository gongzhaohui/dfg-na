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
    // listOfData: StockTaking[] = [];
    @ViewChild(PdInputComponent) inputCmp: PdInputComponent;
    @ViewChild(PdEditComponent) editCmp: PdEditComponent;
    ngOnInit(): void {
        // this.listOfData = [];
    }
    submitPdData(pandianData: StockTaking): void {
        this.editCmp.loading=true;
        this.pandianSvc.add(pandianData).subscribe(result => {
            if (result) {
              // this.editCmp.
                this.editCmp.pdData.push(result);
                this.editCmp.tabComp.data=this.editCmp.pdData;
                // this.editCmp.total++;
                this.editCmp.loading=false;
            }
        });
    }
    loadPdData() {
        const period = this.inputCmp.inputForm.value.period;
        const category = this.inputCmp.inputForm.value.category;
        const creator = this.inputCmp.inputForm.value.creator;
        this.editCmp.loading=true;
        this.pandianSvc
            .getList(period, category, creator)
            .subscribe(list => {
              this.editCmp.pdData=list;
              // this.editCmp.total=this.editCmp.pdData.length;
              this.editCmp.loading=false;
            });
    }
    // deleteRow(id: number) {
    //     const index = this.editCmp.pdData.findIndex(item => item.id === id);
    //     if (index > -1) {
    //       this.editCmp.loading=true;
    //         this.pandianSvc.removeById(id).subscribe(r => {
    //           console.log('del'+index);
    //           // console.log(this.listOfData);
    //             this.editCmp.pdData.splice(index, 1);
    //             // console.log(this.listOfData);
    //             // this.editCmp.pdData = this.listOfData;
    //             this.editCmp.total=this.editCmp.pdData.length;
    //             this.editCmp.loading=false;
    //         });
    //     }
    // }
    // saveRow(data: StockTaking) {
    //   this.editCmp.loading=true;
    //   const id=data.id;
    //   const index = this.editCmp.pdData.findIndex(item => item.id === id);
    //   Object.assign(this.editCmp.pdData[index], data);
    //   this.pandianSvc.save(data).subscribe(r => {
    //     // this.editCmp.pdData=this.listOfData;
    //     this.editCmp.loading=false;
    //   });
    // }
}

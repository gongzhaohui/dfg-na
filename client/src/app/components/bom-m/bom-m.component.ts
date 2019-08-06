import {
    Component,
    OnInit,
    Input,
    AfterViewInit,
    AfterContentInit,
    ComponentRef,
    ViewChild,
    SimpleChange,
} from '@angular/core';
// import { Bom } from 'src/app/entities/bom_m';
import { BomItem } from 'src/app/entities/bomitem';
import { NzTableComponent } from 'ng-zorro-antd';

@Component({
    selector: 'dfg-bom-m',
    templateUrl: './bom-m.component.html',
})
export class BomMComponent implements OnInit, AfterViewInit, AfterContentInit {
    @Input() bom: BomItem[] = [];

    @ViewChild('nestedTable',{static:true})
    tabComp: NzTableComponent;

    ngOnInit(): void {
        this.bom = [];
        // console.log('bom-data:' + JSON.stringify(this.bom_m));
    }
    ngAfterContentInit(): void {}
    ngAfterViewInit(): void {
        this.tabComp.data = this.bom;
    }

    ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
        let log: string[] = [];
        for (let propName in changes) {
            let changedProp = changes[propName];
            let to = JSON.stringify(changedProp.currentValue);
            if (changedProp.isFirstChange()) {
                log.push(`Initial value of ${propName} set to ${to}`);
            } else {
                let from = JSON.stringify(changedProp.previousValue);
                log.push(`${propName} changed from ${from} to ${to}`);
            }
        }
        // console.log(log.join(', '));
    }
}

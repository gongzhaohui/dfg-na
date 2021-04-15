import {
    Component,
    OnInit,
    ViewChild,
    Input,
    AfterViewInit,
} from '@angular/core';
import { NzTableComponent } from 'ng-zorro-antd/table';
import { BomItem } from 'src/app/entities/bomitem';

@Component({
    selector: 'dfg-bom-p',
    templateUrl: './bom-p.component.html',
    styleUrls: ['./bom-p.component.css'],
})
export class BomPComponent implements OnInit, AfterViewInit {
    @Input() bom: BomItem[] = [];

    @ViewChild('nestedTable', { static: true })
    tabComp: NzTableComponent;

    ngOnInit(): void {
        this.bom = [];
        // console.log('bom-data:' + JSON.stringify(this.bom_m));
    }

    ngAfterViewInit(): void {
        this.tabComp.data = this.bom;
    }
}

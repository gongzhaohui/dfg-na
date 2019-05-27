import { Component, OnInit, Input } from '@angular/core';
import { Bom } from 'src/app/services/bom_m';

@Component({
  selector: 'dfg-bom-m',
  templateUrl: './bom-m.component.html'
})
export class BomMComponent implements OnInit {
  listOfParentData: any[] = [];
  listOfChildrenData: any[] = [];
@Input() bom_m:Bom;

  ngOnInit(): void {
    for (let i = 0; i < 3; ++i) {
      this.listOfParentData.push({
        key: i,
        name: 'Screem',
        platform: 'iOS',
        version: '10.3.4.5654',
        upgradeNum: 500,
        creator: 'Jack',
        createdAt: '2014-12-24 23:12:00',
        expand: false
      });
    }
    for (let i = 0; i < 3; ++i) {
      this.listOfChildrenData.push({
        key: i,
        date: '2014-12-24 23:12:00',
        name: 'This is production name',
        upgradeNum: 'Upgraded: 56'
      });
    }
  }
}

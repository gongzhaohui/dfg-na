import { Component, OnInit,Input } from '@angular/core';
import { Inventory } from 'src/app/services/inventory';
import { Hourrate } from 'src/app/services/hourrate';

@Component({
  selector: 'dfg-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  @Input() inventory:Inventory;
  @Input() hourrate:Hourrate;
  @Input() cost:number;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit,Input } from '@angular/core';
import { Inventory } from 'src/app/entities/inventory';
import { HourRate } from 'src/app/entities/hourrate';

@Component({
  selector: 'dfg-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  @Input() inventory:Inventory;
  @Input() hourrate:HourRate;
  @Input() cost:number;
  constructor() { }

  ngOnInit() {
  }

}

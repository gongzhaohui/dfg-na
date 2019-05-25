import { Component, OnInit,Input } from '@angular/core';
import { Inventory } from 'src/app/services/inventory';

@Component({
  selector: 'dfg-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  @Input() inventory:Inventory;
  @Input() period:string;
  @Input() hourrate:number;
  @Input() cost:number;
  constructor() { }

  ngOnInit() {
  }

}

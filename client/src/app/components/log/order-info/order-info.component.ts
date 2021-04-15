import { Component, Input, OnInit } from '@angular/core';
import { OrderInfo } from 'src/app/entities/order-info';

@Component({
  selector: 'dfg-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.css']
})
export class OrderInfoComponent implements OnInit {
  @Input() orderInfo:OrderInfo;
  constructor() { }

  ngOnInit(): void {
  }

}

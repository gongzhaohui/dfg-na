import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Log } from 'src/app/entities/log';
import { OrderInfo } from 'src/app/entities/order_info';
import { LogService } from 'src/app/services/log.service';
import { OrderInfoService } from 'src/app/services/orderinfo.service';
import { LogInputComponent } from './log-input/log-input.component';
import { LogListComponent } from './log-list/log-list.component';
import { OrderInfoComponent } from './order-info/order-info.component';

@Component({
  selector: 'dfg-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class logComponent implements OnInit {
  @ViewChild(LogInputComponent, { static: true }) inputCmp: LogInputComponent;
  @ViewChild(LogListComponent, { static: true }) listCmp: LogListComponent;
  @ViewChild(OrderInfoComponent, { static: true }) orderCmp: LogListComponent;
  private  operation:string;
  private orderInfo:OrderInfo=null;
  private logs:Log[]=null;

  constructor(private route:ActivatedRoute,private orderSvc:OrderInfoService,private logSvc:LogService ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.operation = params['operation'];
      console.log('operation:',this.operation);
    });
  }
  onSaveLog(log:Log){}
  onUpdateLog(log:Log){}
  onDeleteLog(log:Log){}
  onGetOrder(o:any){
    console.log('getorder o:',o)
  }
  onGetList(o:any){
    console.log('o:',o)
  }
}

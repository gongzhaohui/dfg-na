import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Log } from 'src/app/entities/log';
import { LogInputComponent } from './log-input/log-input.component';
import { LogListComponent } from './log-list/log-list.component';

@Component({
  selector: 'dfg-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class logComponent implements OnInit {
  @ViewChild(LogInputComponent, { static: true }) inputCmp: LogInputComponent;
  @ViewChild(LogListComponent, { static: true }) listCmp: LogListComponent;
  private  operation:string;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.operation = params['operation'];
      console.log('operation:',this.operation);
    });
  }
  saveHistory(log:Log){}
  updateHistory(log:Log){}
  deleteHistory(log:Log){}

}

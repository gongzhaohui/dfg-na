import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
// import { SOInfo } from './sevices/so/soinfo';
// import { formatDate } from '@angular/common';
// import { SoInfoService } from './sevices/so/soinfo.service';

// import { zhcn, extra } from './zh-cn/index';
// registerLocaleData(zhcn, 'zh-cn', extra);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'DFG NA Portal';
   constructor(/*private soinfoService: SoInfoService*/) {}

  ngOnInit() {

  }
  ngAfterViewInit() {
  }


}

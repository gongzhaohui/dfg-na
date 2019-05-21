import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material';
import * as _moment from 'moment';
// import { default as _rollupMoment } from 'moment';


const moment = _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYYMMDD',
  },
  display: {
    dateInput: 'YYYYMMDD',
    monthYearLabel: 'YYYYMM',
    dateA11yLabel: 'DD',
    monthYearA11yLabel: 'YYYYMM',
  },
};


@Component({
  selector: 'app-ymddatepicker',
  templateUrl: './YmdDatepicker.component.html',
  styleUrls: ['./YmdDatepicker.component.css'],
  providers: [

    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class YmdDatepickerComponent implements OnInit {

  @Output() date2: EventEmitter<any> = new EventEmitter<any>();


  date = new FormControl(moment());


  constructor() { }

  ngOnInit() {
  }

  change(dateEvent) {
    this.date2.emit(dateEvent.value);
  }


}


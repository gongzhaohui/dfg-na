import { Component, Input, OnInit } from '@angular/core';
import { Log } from 'src/app/entities/log';

@Component({
  selector: 'dfg-log-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.css']
})
export class LogListComponent implements OnInit {
@Input()logs:Log[]
  constructor() { }

  ngOnInit(): void {
  }

}

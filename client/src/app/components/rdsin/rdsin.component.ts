import { Component, OnInit, Input } from '@angular/core';
import { Rdsin } from 'src/app/entities/rdsin';

@Component
(
  {
  selector: 'dfg-rdsin',
  templateUrl: './rdsin.component.html',
  styleUrls: ['./rdsin.component.css']
})
export class RdsinComponent implements OnInit {

  @Input()rdsins:Rdsin[];
  ngOnInit() {
    this.rdsins=[];
  }

}

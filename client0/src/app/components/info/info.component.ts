import { Component, OnInit, Input } from '@angular/core';
import { SOInfo } from '../../sevices/so/soinfo';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
@Input () so: SOInfo= new SOInfo();
  constructor() { }

  ngOnInit() {
  }

}

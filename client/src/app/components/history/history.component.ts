import { Component,Input } from '@angular/core';
import { HistoryItem } from 'src/app/entities/historyitem';

@Component({
  selector: 'dfg-cost-history',
  templateUrl: './history.component.html',
  styleUrls:['./history.component.css'],
})
export class HistoryComponent {
  @Input() history:HistoryItem[];
}

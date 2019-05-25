import { Component,Input } from '@angular/core';
import { HistoryItem } from 'src/app/services/historyitem';

@Component({
  selector: 'dfg-cost-history',
  templateUrl: './cost-history.component.html'
})
export class CostHistoryComponent {
  @Input() history:HistoryItem[];
}

import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NzTableComponent } from 'ng-zorro-antd/table';
import { Log } from 'src/app/entities/log';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'dfg-log-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.css']
})
export class LogListComponent implements OnInit {
 @Input()logs:Log[]
 @Input() deleteable:boolean;
 @ViewChild('logList', { static: true })
    tabComp: NzTableComponent;
 editId: number | null;
  _editCache = new Map();
  pageIndex = 1;
  pageSize = 10;
  total = 0;
  loading = false;
  constructor(private logSvc:LogService) { }

  ngOnInit(): void {
    // console.log('list logs:',this.logs)
  }
  cancelEdit(id: number): void
  {
    const index = this.logs.findIndex(item => item.id === id);
    this._editCache[ id ] = {
      data: { ...this.logs[ index ] },
      edit: false,
    };
  }

  saveEdit(id: number): void
  {
    const index = this.logs.findIndex(item => item.id === id);
    const data = this._editCache[ id ].data;
    Object.assign(this.logs[ index ], data);
    this.logSvc.save(data).subscribe(r =>
    {
      this.loading = false;
      Object.assign(this.logs[ index ], data);
      this._editCache[ id ].edit = false;
    });
  }

  startEdit(id: number): void
  {
    const index = this.logs.findIndex(item => item.id === id);
    this._editCache[ id ] = { edit: true, data: { ...this.logs[ index ] } };
  }
  deleteRow(id: number): void
  {
      console.log('id:',id);
      const index = this.logs.findIndex(item => item.id === id);
    if (index > -1)
    {
      this.loading = true;
      const start=new Date().getMilliseconds();
      this.logSvc.removeById(id).subscribe(r =>
      {
        this.logs.splice(index, 1);
        const timing=start-((new Date()).getMilliseconds());
         this.tabComp.data = this.logs;
        this.total = this.logs.length;
        this.loading = false;
        console.log('timing:',timing)
        if (this._editCache[ id ])
        {
          this._editCache.delete(id);
        }
      });
    } // this.deleteData.emit(id);
  }
}

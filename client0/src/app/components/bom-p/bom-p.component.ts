import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { BomPDataSource } from './bom-p-datasource';

@Component({
  selector: 'app-bom-p',
  templateUrl: './bom-p.component.html',
  styleUrls: ['./bom-p.component.css']
})
export class BomPComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: BomPDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new BomPDataSource(this.paginator, this.sort);
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { BomMDataSource } from './bom-m-datasource';

@Component({
  selector: 'app-bom-m',
  templateUrl: './bom-m.component.html',
  styleUrls: ['./bom-m.component.css']
})
export class BomMComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: BomMDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new BomMDataSource(this.paginator, this.sort);
  }
}

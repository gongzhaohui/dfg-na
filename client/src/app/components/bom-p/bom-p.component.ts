import { Component, ElementRef, HostListener, OnInit, ViewChild, Input } from '@angular/core';
import { NzInputDirective } from 'ng-zorro-antd';
import { BomPlan } from 'src/app/entities/bom_plan';

@Component({
  selector: 'dfg-bom-p',
  templateUrl: './bom-p.component.html',
  styleUrls: ['./bom-p.component.css']
})
export class BomPComponent implements OnInit {
  @Input( )bom_p:BomPlan[];
  i = 0;
  editId: string | null;
  listOfData: any[] = [];
  @ViewChild(NzInputDirective, { read: ElementRef }) inputElement: ElementRef;

  @HostListener('window:click', ['$event'])
  handleClick(e: MouseEvent): void {
    if (this.editId && this.inputElement && this.inputElement.nativeElement !== e.target) {
      this.editId = null;
    }
  }

  addRow(): void {
    this.listOfData = [
      ...this.listOfData,
      {
        id: `${this.i}`,
        name: `Edward King ${this.i}`,
        age: '32',
        address: `London, Park Lane no. ${this.i}`
      }
    ];
    this.i++;
  }

  deleteRow(id: string): void {
    this.listOfData = this.listOfData.filter(d => d.id !== id);
  }

  startEdit(id: string, event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.editId = id;
  }

  ngOnInit(): void {
    this.addRow();
    this.addRow();
  }
}

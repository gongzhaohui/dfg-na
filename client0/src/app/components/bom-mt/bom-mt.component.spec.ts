import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule, MatIconModule, MatTreeModule } from '@angular/material';

import { BomMtComponent } from './bom-mt.component';

describe('BomMtComponent', () => {
  let component: BomMtComponent;
  let fixture: ComponentFixture<BomMtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BomMtComponent ],
      imports: [
        MatButtonModule,
        MatIconModule,
        MatTreeModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BomMtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

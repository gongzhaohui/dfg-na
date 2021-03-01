import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReghistoryComponent } from './reghistory.component';

describe('ReghistoryComponent', () => {
  let component: ReghistoryComponent;
  let fixture: ComponentFixture<ReghistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReghistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReghistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

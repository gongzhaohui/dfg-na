import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { logComponent } from './log.component';

describe('ReghistoryComponent', () => {
  let component: logComponent;
  let fixture: ComponentFixture<logComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ logComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(logComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

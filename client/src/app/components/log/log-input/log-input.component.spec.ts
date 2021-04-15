import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInputComponent } from './log-input.component';

describe('RegInputComponent', () => {
  let component: LogInputComponent;
  let fixture: ComponentFixture<LogInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

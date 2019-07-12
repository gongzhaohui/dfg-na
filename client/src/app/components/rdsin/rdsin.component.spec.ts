/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RdsinComponent } from './rdsin.component';

describe('RdsinComponent', () => {
  let component: RdsinComponent;
  let fixture: ComponentFixture<RdsinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdsinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

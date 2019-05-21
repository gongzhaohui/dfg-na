/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Barcode1dComponent } from './barcode1d.component';

describe('Barcode1dComponent', () => {
  let component: Barcode1dComponent;
  let fixture: ComponentFixture<Barcode1dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Barcode1dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Barcode1dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

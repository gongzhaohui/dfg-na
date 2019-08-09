/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NoPageComponent } from './nopage.component';

describe('NopageComponent', () => {
    let component: NoPageComponent;
    let fixture: ComponentFixture<NoPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NoPageComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NoPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

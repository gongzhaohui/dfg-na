import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdEditComponent } from './pdedit.component';

describe('PdeditComponent', () => {
    let component: PdEditComponent;
    let fixture: ComponentFixture<PdEditComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PdEditComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PdEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

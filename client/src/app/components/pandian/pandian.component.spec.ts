import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PandianComponent } from './pandian.component';

describe('PandianComponent', () => {
    let component: PandianComponent;
    let fixture: ComponentFixture<PandianComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PandianComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PandianComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

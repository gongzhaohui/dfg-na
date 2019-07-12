import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { BomMComponent } from './bom-m.component';

describe('BomMComponent', () => {
    let component: BomMComponent;
    let fixture: ComponentFixture<BomMComponent>;

    beforeEach(fakeAsync(() => {
        TestBed.configureTestingModule({
            declarations: [BomMComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(BomMComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should compile', () => {
        expect(component).toBeTruthy();
    });
});

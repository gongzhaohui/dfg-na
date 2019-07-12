import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { HistoryComponent } from './history.component';

describe('CostSearchComponent', () => {
    let component: HistoryComponent;
    let fixture: ComponentFixture<HistoryComponent>;

    beforeEach(fakeAsync(() => {
        TestBed.configureTestingModule({
            declarations: [HistoryComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(HistoryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should compile', () => {
        expect(component).toBeTruthy();
    });
});

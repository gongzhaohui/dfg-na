import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CostHistoryComponent } from './cost-history.component';

describe('CostSearchComponent', () => {
  let component: CostHistoryComponent;
  let fixture: ComponentFixture<CostHistoryComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CostHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

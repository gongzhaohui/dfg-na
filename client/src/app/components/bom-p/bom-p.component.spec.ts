import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { BomPComponent } from './bom-p.component';

describe('BomPComponent', () => {
  let component: BomPComponent;
  let fixture: ComponentFixture<BomPComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BomPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BomPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

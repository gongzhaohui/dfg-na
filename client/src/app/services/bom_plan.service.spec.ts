/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Bom_planService } from './bom_plan.service';

describe('Service: Bom_plan', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Bom_planService]
    });
  });

  it('should ...', inject([Bom_planService], (service: Bom_planService) => {
    expect(service).toBeTruthy();
  }));
});

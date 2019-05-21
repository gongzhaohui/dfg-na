/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HourrateService } from './hourrate.service';

describe('Service: Hourrate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HourrateService]
    });
  });

  it('should ...', inject([HourrateService], (service: HourrateService) => {
    expect(service).toBeTruthy();
  }));
});

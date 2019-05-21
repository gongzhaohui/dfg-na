/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SoinfoService } from './soinfo.service';

describe('Service: Soinfo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SoinfoService]
    });
  });

  it('should ...', inject([SoinfoService], (service: SoinfoService) => {
    expect(service).toBeTruthy();
  }));
});

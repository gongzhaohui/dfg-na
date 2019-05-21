/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RdsinService } from './rdsin.service';

describe('Service: Rdsin', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RdsinService]
    });
  });

  it('should ...', inject([RdsinService], (service: RdsinService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { ReghistoryService } from './reghistory.service';

describe('ReghistoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReghistoryService = TestBed.get(ReghistoryService);
    expect(service).toBeTruthy();
  });
});

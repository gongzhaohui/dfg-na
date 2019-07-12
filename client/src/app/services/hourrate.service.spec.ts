/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HourRateService } from './hourrate.service';

describe('Service: Hourrate', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [HourRateService],
        });
    });

    it('should ...', inject([HourRateService], (service: HourRateService) => {
        expect(service).toBeTruthy();
    }));
});

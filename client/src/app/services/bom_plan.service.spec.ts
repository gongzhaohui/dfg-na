/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BomPlanService } from './bom_plan.service';

describe('Service: Bom_plan', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [BomPlanService],
        });
    });

    it('should ...', inject([BomPlanService], (service: BomPlanService) => {
        expect(service).toBeTruthy();
    }));
});

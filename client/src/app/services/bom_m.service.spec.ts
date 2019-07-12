/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BomService } from './bom_m.service';

describe('Service: Bom', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [BomService],
        });
    });

    it('should ...', inject([BomService], (service: BomService) => {
        expect(service).toBeTruthy();
    }));
});

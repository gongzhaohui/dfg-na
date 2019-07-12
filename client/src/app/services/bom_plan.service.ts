import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BomItem } from '../entities/bomitem';

@Injectable({
    providedIn: 'root',
})
export class BomPlanService {
    private url = 'http://localhost:3000/api/bom/plan';
    constructor(private http: HttpClient) {}
    GetManufactureBom(searchType: string, term: string): Observable<BomItem> {
        return this.http.get<BomItem>(
            this.url + '/m/?type=' + searchType + '&term=' + term
        );
    }
    GetPurchaseBom(searchType: string, term: string): Observable<BomItem> {
        return this.http.get<BomItem>(
            this.url + '/p/?type=' + searchType + '&term=' + term
        );
    }
}

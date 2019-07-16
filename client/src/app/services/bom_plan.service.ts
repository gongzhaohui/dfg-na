import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BomItem } from '../entities/bomitem';

@Injectable({
    providedIn: 'root',
})
export class BomPlanService {
    private url = `${this.baseUrl}/api/bom/plan`;
    constructor(
        @Inject('BASE_URL') private baseUrl: string,
        private http: HttpClient
    ) {}
    GetManufactureBom(searchType: string, term: string): Observable<BomItem> {
        const params = new HttpParams({
            fromString: `type=${searchType}&term=${term}`,
        });
        return this.http.get<BomItem>(this.url + '/m', { params: params });
    }
    GetPurchaseBom(searchType: string, term: string): Observable<BomItem> {
        const params = new HttpParams({
            fromString: `type=${searchType}&term=${term}`,
        });
        return this.http.get<BomItem>(this.url + '/p', { params: params });
    }
}

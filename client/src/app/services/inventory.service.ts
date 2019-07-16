import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Inventory } from '../entities/inventory';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class InventoryService {
    // private url = 'http://10.151.40.17:3000/api/inventory/';
    private url = `${this.baseUrl}/api/inventory`;
    constructor(
        @Inject('BASE_URL') private baseUrl: string,
        private http: HttpClient
    ) {}

    GetInventory(searchType: string, term: string): Observable<Inventory> {
        const params = new HttpParams({
            fromString: `type=' + ${searchType} &term=${term}`,
        });
        return this.http.get<Inventory>(this.url, { params: params });
    }
}

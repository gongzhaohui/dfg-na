import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Routing } from '../entities/routing';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class RoutingService {
    private url = `${this.baseUrl}/api/routing`;

    constructor(
        @Inject('BASE_URL') private baseUrl: string,
        private http: HttpClient
    ) {}
    GetRounting(searchType: string, term: string): Observable<Routing> {
        const params = new HttpParams({
            fromString: `type=${searchType}&term=${term}`,
        });
        return this.http.get<Routing>(this.url, { params: params });
    }
}

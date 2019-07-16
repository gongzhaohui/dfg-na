import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rdsin } from '../entities/rdsin';

@Injectable({
    providedIn: 'root',
})
export class RdsinService {
    private url = `${this.baseUrl}/api/rdsin/`;

    constructor(
        @Inject('BASE_URL') private baseUrl: string,
        private http: HttpClient
    ) {}

    GetRdsIn(searchType: string, term: string): Observable<Rdsin[]> {
        const params = new HttpParams({
            fromString: `type=' + ${searchType} &term=${term}`,
        });
        return this.http.get<Rdsin[]>(this.url, { params: params });
    }
}

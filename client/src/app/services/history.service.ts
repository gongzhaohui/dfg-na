import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HistoryItem } from '../entities/historyitem';

@Injectable({
    providedIn: 'root',
})
export class HistoryService {
    private url = `${this.baseUrl}/api/history`;
    constructor(
        @Inject('BASE_URL') private baseUrl: string,
        private http: HttpClient
    ) {}

    GetHistory(searchType: string, term: string): Observable<HistoryItem[]> {
        // console.log('url:' + this.url + term);
        const params = new HttpParams({
            fromString: `type=${searchType}&term=${term}`,
        });
        return this.http.get<HistoryItem[]>(this.url, { params: params });
    }
}

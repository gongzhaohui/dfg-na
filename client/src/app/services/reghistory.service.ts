import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Log } from '../entities/log';

@Injectable({
    providedIn: 'root',
})
export class RegHistoryService {
    private url = `${this.baseUrl}/api/reg/history`;

    constructor(
        @Inject('BASE_URL') private baseUrl: string,
        private http: HttpClient
    ) {}
    add(Log: Log) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.post<Log>(this.url, Log, httpOptions);
    }
    save(Log: Log) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.put<Log>(this.url, Log, httpOptions);
    }

    getList(
        period: string,
        operation: string,
        creator: string
    ): Observable<Log[]> {
        const params = new HttpParams({
            fromString: `period=${period}&operation=${operation}&creator=${creator}`,
        });
        return this.http.get<Log[]>(this.url, { params: params });
    }
    removeById(id: number) {
        return this.http.delete<Log>(this.url + '/' + id);
    }
}

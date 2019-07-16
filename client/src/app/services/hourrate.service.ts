import { Injectable, Inject } from '@angular/core';
import { HourRate } from '../entities/hourrate';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class HourRateService {
    private url = `${this.baseUrl}/api/hourrate`;
    constructor(
        @Inject('BASE_URL') private baseUrl: string,
        private http: HttpClient
    ) {}
    GetHourrate(cinvccode: string, period: string): Observable<HourRate> {
        // console.log('url:' + this.url + cinvccode);
        const params = new HttpParams({
            fromString: `cinvccode=${cinvccode}&period=${period}`,
        });
        return this.http.get<HourRate>(this.url, { params: params });
    }
}

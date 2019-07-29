import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { StockTaking } from '../entities/stocktaking.entity';

@Injectable({
    providedIn: 'root',
})
export class StockTakingService {
    private url = `${this.baseUrl}/api/stocktaking`;
    constructor(
        @Inject('BASE_URL') private baseUrl: string,
        private http: HttpClient
    ) {}

    add(stockTakingData: StockTaking) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.post<StockTaking>(
            this.url,
            stockTakingData,
            httpOptions
        );
    }

    save(stockTakingData: StockTaking) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.put<StockTaking>(
            this.url,
            stockTakingData,
            httpOptions
        );
    }
    getList(period: string, category: string, creator: string) {
        const params = new HttpParams({
            fromString: `period=${period}&category=${category}&creator=${creator}`,
        });
        return this.http.get<StockTaking[]>(this.url, { params: params });
    }
    removeById(id: number) {
        return this.http.delete<StockTaking>(this.url + '/' + id);
    }
}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderInfo } from '../entities/order-info';

@Injectable({
  providedIn: 'root'
})
export class OrderInfoService
{
  private url = `${ this.baseUrl }/api/log/orderinfo`;

  constructor(
    @Inject('BASE_URL') private baseUrl: string,
    private http: HttpClient
  ) { }
  getOrderInfo(barcode: string, type: string): Observable<OrderInfo>
  {
    const params = new HttpParams({
      fromString: `barcode=${ barcode }&type=${ type }`,
    });
    return this.http.get<OrderInfo>(this.url, { params: params });
  }
}

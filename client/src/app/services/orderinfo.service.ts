import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order_Info } from '../entities/order_info';

@Injectable({
  providedIn: 'root'
})
export class OrderInfoService {
  private url = `${this.baseUrl}/api/orderinfo`;

  constructor(
      @Inject('BASE_URL') private baseUrl: string,
      private http: HttpClient
  ) {}
  getOrderInfo(barcode:string,type:string):Observable<Order_Info>{
    const params = new HttpParams({
      fromString: `barcode=${barcode}&type=${type}`,
  });
  return this.http.get<Order_Info>(this.url, { params: params });
  }
}

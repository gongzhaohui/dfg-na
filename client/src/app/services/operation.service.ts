import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Operation } from '../entities/op';

@Injectable({
  providedIn: 'root'
})
export class OperationService {
  private url = `${this.baseUrl}/api/operation`;

  constructor(
      @Inject('BASE_URL') private baseUrl: string,
      private http: HttpClient
  ) {}
  getOperations(/*barcode:string*/):Observable<Operation>{
  //   const params = new HttpParams({
  //     fromString: `barcode${barcode}`,
  // });
  return this.http.get<Operation>(this.url/*, { params: params }*/);
  }
}

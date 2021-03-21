import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Operator } from '../entities/operator';

@Injectable({
  providedIn: 'root'
})
export class OperatorService {
  private url = `${this.baseUrl}/api/operator`;

  constructor(
      @Inject('BASE_URL') private baseUrl: string,
      private http: HttpClient
  ) {}
  getOperators(dept:string):Observable<Operator[]>{
    const params = new HttpParams({
      fromString: `dept=${dept}`,
  });
  return this.http.get<Operator[]>(this.url, { params: params });
  }
}

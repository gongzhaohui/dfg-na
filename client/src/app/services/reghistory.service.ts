import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReghistoryService {
  private url = `${this.baseUrl}/api/reg/`;

  constructor(
      @Inject('BASE_URL') private baseUrl: string,
      private http: HttpClient
  ) {}
}

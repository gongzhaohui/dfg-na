import { Injectable } from '@angular/core';
import { Bom } from './bom';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BomService {
  private url = 'http://localhost:3000/api/bom/';

  constructor(private http: HttpClient) {}

  GetBomByBomid(bomId: number): Observable<Bom[]> {
    return this.http.get<Bom[]>(this.url +'?bomid='+ bomId);
  }

  GetBom(searchType:string,term:string): Observable<Bom[]> {
    return this.http.get<Bom[]>(this.url+'?type='+searchType+'&term=' + term);
  }
}

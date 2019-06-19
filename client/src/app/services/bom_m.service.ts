import { Injectable } from '@angular/core';
import { Bom_M } from '../entities/bom_m';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BomService {
  private url = 'http://localhost:3000/api/bom-m/';

  constructor(private http: HttpClient) {}

  GetBomByBomid(bomId: number): Observable<Bom_M[]> {
    return this.http.get<Bom_M[]>(this.url +'?bomid='+ bomId);
  }

  GetBom(searchType:string,term:string): Observable<Bom_M[]> {
    return this.http.get<Bom_M[]>(this.url+'?type='+searchType+'&term=' + term);
  }
}

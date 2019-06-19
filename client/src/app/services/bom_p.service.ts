import { Injectable } from '@angular/core';
import { Bom_P } from '../entities/bom_p';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BomService {
  private url = 'http://localhost:3000/api/bom-p/';

  constructor(private http: HttpClient) {}

  GetBomByBomid(bomId: number): Observable<Bom_P[]> {
    return this.http.get<Bom_P[]>(this.url +'?bomid='+ bomId);
  }

  GetBom(searchType:string,term:string): Observable<Bom_P[]> {
    return this.http.get<Bom_P[]>(this.url+'?type='+searchType+'&term=' + term);
  }
}

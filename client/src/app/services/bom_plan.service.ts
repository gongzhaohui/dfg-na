import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BomPlan } from '../entities/bom_plan';

@Injectable({
  providedIn: 'root'
})
export class BomPlanService {
  private url = 'http://localhost:3000/api/bom/plan';
  constructor(private http: HttpClient) {}
  GetManufactureBom(searchType: string, term: string): Observable<BomPlan> {
    return this.http.get<BomPlan>(
      this.url + '/m/?type=' + searchType + '&term=' + term
    );
  }
  GetPurchaseBom(searchType: string, term: string): Observable<BomPlan> {
    return this.http.get<BomPlan>(
      this.url + '/p/?type=' + searchType + '&term=' + term
    );
  }
}

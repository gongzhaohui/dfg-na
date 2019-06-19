import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Routing } from '../entities/routing';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {
  private url = 'http://localhost:3000/api/rounting/';

constructor(private http:HttpClient) { }
GetRounting(searchType :string,term:string):Observable<Routing>{

  return this.http.get<Routing>(this.url+'?type='+searchType+'&term='+term)
}

}

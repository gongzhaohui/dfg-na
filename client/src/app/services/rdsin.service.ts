import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rdsin } from './rdsin';

@Injectable({
  providedIn: 'root'
})
export class RdsinService {
private url = 'http://localhost:3000/api/rdsin/';

constructor(private http:HttpClient) { }

GetRdsIn(searchType :string,term:string):Observable<Rdsin[]>{
  return this.http.get<Rdsin[]>(this.url+'?type='+searchType+'&term='+term);
}
}

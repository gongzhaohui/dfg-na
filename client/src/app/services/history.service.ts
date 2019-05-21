import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SOInfo } from './soinfo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  soInfoUrl = 'http://localhost:3000/os/jno/';
constructor(private http: HttpClient) { }
getHistoryByJno(barCode: string) :Observable<SOInfo>{
  console.log('url:' + this.soInfoUrl + barCode);
  return this.http.get<SOInfo>(this.soInfoUrl + barCode);
}
}

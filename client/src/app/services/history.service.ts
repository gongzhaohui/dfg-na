import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {HistoryItem} from '../entities/historyitem';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private url = 'http://localhost:3000/api/history/';

constructor(private http: HttpClient) { }

GetHistory(searchType:string,term: string) :Observable<HistoryItem[]>{
  // console.log('url:' + this.url + term);
  return this.http.get<HistoryItem[]>(this.url+'?type='+searchType+'&term=' + term);
}

GetHistoryByJno(jno: string) :Observable<HistoryItem[]>{
  // console.log('url:' + this.url + jno);
  return this.http.get<HistoryItem[]>(this.url+'jno/' + jno);
}

GetHistoryByMno(mno: string) :Observable<HistoryItem[]>{
  // console.log('url:' + this.url + mno);
  return this.http.get<HistoryItem[]>(this.url+'mno/' + mno);
}

GetHistoryByInv(invcode: string) :Observable<HistoryItem[]>{
  // console.log('url:' + this.url + invcode);
  return this.http.get<HistoryItem[]>(this.url+'inventory/' + invcode);
}
}

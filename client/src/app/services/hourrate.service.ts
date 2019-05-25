import { Injectable } from '@angular/core';
import {Hourrate} from './hourrate';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HourrateService {
  private url = 'http://localhost:3000/api/hourrate/';

  constructor(private http:HttpClient) { }
  GetHourrate(cinvccode: string, period?:string) :Observable<Hourrate>{
    console.log('url:' + this.url + cinvccode);
    return this.http.get<Hourrate>(this.url +'?cinvccode=' +cinvccode + period?'&period='+period:'');
  }

}

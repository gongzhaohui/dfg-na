import { Injectable } from '@angular/core';
import {HourRate} from '../entities/hourrate';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HourRateService {
  private url = 'http://localhost:3000/api/hourrate/';

  constructor(private http:HttpClient) { }
  GetHourrate(cinvccode: string, period:string) :Observable<HourRate>{
    // console.log('url:' + this.url + cinvccode);
    return this.http.get<HourRate>(this.url +'?cinvccode=' +cinvccode + '&period='+period);
  }

}

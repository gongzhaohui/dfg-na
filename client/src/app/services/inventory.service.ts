import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inventory } from '../entities/inventory';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private url = 'http://localhost:3000/api/inventory/';

constructor(private http:HttpClient) { }

GetInventory(searchType:string,term:string):Observable<Inventory>{
  return this.http.get<Inventory>(this.url+'?type='+searchType+'&term=' + term)
}
}

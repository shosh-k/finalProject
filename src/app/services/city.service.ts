import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { city } from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  url: string="https://localhost:44365/api/city"
  ret:  Observable< number> | undefined ;
  constructor(private http: HttpClient) { }

  AddCity(c :city):Observable<number>{
    let headers = new Headers({'Contet-type': 'application/json; charset=utf-8'});

    this.ret =  this.http.post<number>(this.url + '/addcity', c);
    return this.ret;
  }
}

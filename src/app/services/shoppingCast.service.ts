import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCastService {
  url: string="https://localhost:44365/api/shoppingcast"
  ret:  Observable< number> | undefined ;
  constructor(private http: HttpClient) { }


  DeleteFromShoppingCast(codeProduct :number):Observable<number>{
    //let headers = new Headers({'Contet-type': 'application/json; charset=utf-8'});
    //this.ret =  this.http.post<number>(this.url + '/deletefromshoppingcast',codeProduct);
    //return this.ret;
    return this.http.get<number>(`${this.url}/deletefromshoppingcast/${codeProduct}`);

  }

}
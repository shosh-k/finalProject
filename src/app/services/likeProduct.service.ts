import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LikeProductService {
  url: string="https://localhost:44365/api/likeproduct"
  ret:  Observable< number> | undefined ;
  constructor(private http: HttpClient) { }

  

  DeleteFromLikeProduct(codeProduct :number):Observable<number>{
   
    //let headers = new Headers({'Contet-type': 'application/json; charset=utf-8'});
    //return this.http.post<number>(this.url + '/removefromlikeproduct',codeProduct);
     return this.http.get<number>(`${this.url}/DeleteFromLikeProduct/${codeProduct}`);
  }

}
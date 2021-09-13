import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { likeProduct, product, shoppingCast } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService
{
  url: string="https://localhost:44365/api/product"
  ret:  Observable< number> | undefined ;
  constructor(private http: HttpClient) { }

  addnewproduct(pro :product):Observable<number>{
    let headers = new Headers({'Contet-type': 'application/json; charset=utf-8'});
    this.ret =  this.http.post<number>(this.url + '/AddNewProduct', pro);
    console.log(this.ret);
    return this.ret;
  }

  GetLikeProducts(userId: Number):Observable<product[]>{
    return this.http.get<product[]>(`${this.url}/getlikeproducts/${userId}`);
  }

  GetShoppingCast(userId: Number):Observable<product[]>{    
    return this.http.get<product[]>(`${this.url}/getshoppingcast/${userId}`);
  }

  GetAllProducts():Observable<product[]>{
    return this.http.get<product[]>(`${this.url}/getallproducts/`);
  }
  
  GetProductsOfUser(userId:number):Observable<product[]>{
    return this.http.get<product[]>(`${this.url}/GetProductsOfUser/${userId}`);
  }

  AddToShoppingCast(sProduct:shoppingCast):Observable<number>{
    let headers = new Headers({'Contet-type': 'application/json; charset=utf-8'});
    this.ret =  this.http.post<number>(this.url + '/addtoshoppingcast',sProduct);
    return this.ret;
  }
  
  AddToLikeProduct(lProduct:likeProduct):Observable<number>{
    let headers = new Headers({'Contet-type': 'application/json; charset=utf-8'});
    
    this.ret =  this.http.post<number>(this.url + '/addtolikeproduct',lProduct);
    console.log(this.ret);
    return this.ret;
  }
  
  BuyProduct(codeUser: number):Observable<product[]>{
    //let headers = new Headers({'Contet-type': 'application/json; charset=utf-8'});
    //return this.http.post<product[]>(this.url + '/buyproducts',codeUser);
    return this.http.get<product[]>(`${this.url}/buyproducts/${codeUser}`);
  }
}

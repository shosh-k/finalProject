import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { likeProduct, product, shoppingCast } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SortAndFilterService {
  url: string="https://localhost:44365/api/sortandfilter"
  ret:  Observable< number> | undefined ;
  pro: Observable<product> |undefined;
  constructor(private http: HttpClient) { }

  GetProductOrderByPriceLowToHigh(listOfProduct: product[]):Observable<product[]>{
    let headers = new Headers({'Contet-type': 'application/json; charset=utf-8'});
    return this.http.post<product[]>(this.url + '/pricelowtohigt',listOfProduct);
  }

  GetProductOrderByPriceHighToLow(listOfProduct: product[]):Observable<product[]>{
    let headers = new Headers({'Contet-type': 'application/json; charset=utf-8'});
    return this.http.post<product[]>(this.url + '/pricehightolow',listOfProduct);
  }

  GetProductOrderByLocation(userId:number):Observable<product[]>{
    let headers = new Headers({'Contet-type': 'application/json; charset=utf-8'});
    console.log(userId)
    return this.http.get<product[]>(this.url+'/getproductorderbylocation/'+userId);
  }
  GetProductsOrderByStatus(listOfProduct: product[]):Observable<product[]>{
    let headers = new Headers({'Contet-type': 'application/json; charset=utf-8'});
    return this.http.post<product[]>(this.url + '/GetProductsOrderByStatus',listOfProduct);
  }

  GetProductsByCategory(codeCategory:number):Observable<product[]>{
    return this.http.get<product[]>(`${this.url}/getproductsbycategory/${codeCategory}`);
  }

  GetProductsBySubCategory(codeSubCategory:number):Observable<product[]>{
    return this.http.get<product[]>(`${this.url}/getproductsbysubcategory/${codeSubCategory}`);
  }
  GetProductFilterCost(num: number):Observable<product[]>{
    return this.http.get<product[]>(`${this.url}/filtercost/${num}`)
  }

  GetProductToMove():Observable<product[]>{
    return this.http.get<product[]>(`${this.url}/producttomove`)
  }

  GetProductToBuy():Observable<product[]>{
    return this.http.get<product[]>(`${this.url}/producttobuy`)
  }

  GetAllNewProduct():Observable<product[]>{
    return this.http.get<product[]>(`${this.url}/getallnewproduct`)
  }

  GetAllOldProduct():Observable<product[]>{
    return this.http.get<product[]>(`${this.url}/getalloldproduct`)
  }

}
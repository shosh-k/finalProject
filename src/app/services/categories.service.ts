import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { categories, subCategories } from '../models/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url: string="https://localhost:44365/api/category"
  ret:  Observable< number> | undefined ;
  constructor(private http: HttpClient) { }

  GetCategories():Observable<categories[]>{    
    return this.http.get<categories[]>(`${this.url}/getcategories/`);
  }

  GetSubCategories(codeCategory: number):Observable<subCategories[]>{    
    return this.http.get<subCategories[]>(`${this.url}/getsubcategories/${codeCategory}`);
  }

}

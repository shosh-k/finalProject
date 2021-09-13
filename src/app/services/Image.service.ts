import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string="https://localhost:44365/api/image"
  ret:  Observable< number> | undefined ;
  constructor(private http: HttpClient) { }


  public uploadFile (image: File,userId:number): Observable<Object>{
        let formData = new FormData();
        
        formData.append("students", image);
        formData.append("useerId",userId.toString());
        return this.http.post(`${this.url}/loadDataStudent`,formData);
     }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Users } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string="https://localhost:44365/api/user"
  ret:  Observable< number> | undefined ;
  constructor(private http: HttpClient) { }

  signup(user :Users):Observable<number>{
    let headers = new Headers({'Contet-type': 'application/json; charset=utf-8'});

    this.ret =  this.http.post<number>(this.url + '/signup', user);
    console.log(this.ret);
    return this.ret;
  }
  signIn(phone:string|undefined,password:string|undefined):Observable<number>
  {
    return this.http.get<number>(`${this.url}/signin/${phone}/${password}`);
  }
  GetAdressOfUser(userId:number):Observable<string>
  {
    return this.http.get<string>(`${this.url}/GetAdress/${userId}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CostService {
  url: string="https://localhost:44365/api/costoffer"
  ret:  Observable< number> | undefined ;
  constructor(private http: HttpClient) { }

  CostOfferBeds(type: number):Observable<number>{
    console.log(type);
    return this.http.get<number>(`${this.url}/costofferbed/${type}`);
  }
  CostOfferCloset(numOfDor: number):Observable<number>{
    console.log(numOfDor);
    return this.http.get<number>(`${this.url}/costoffercloset/${numOfDor}`);
  }
  CostOfferTable( numOfMeters:number, needPeruk:boolean):Observable<number>{
    return this.http.get<number>(`${this.url}/costoffertable/${numOfMeters}/${needPeruk}`);
  }
  CostOfferChair( numOfChair: number):Observable<number>{
    return this.http.get<number>(`${this.url}/costofferchair/${numOfChair}`);
  }
  CostOfferShidot(needPeruk:boolean):Observable<number>{
    console.log(needPeruk)
    return this.http.get<number>(`${this.url}/costoffershidot/${needPeruk}`);
  }
  CostOfferSoffa(numOfMeters:number):Observable<number>{
    return this.http.get<number>(`${this.url}/costoffersoffa/${numOfMeters}`);
  }
  CostOfferDelivery(userId:number, codeProduct: number):Observable<number>{
    return this.http.get<number>(`${this.url}/costofferdelivery/${userId}/${codeProduct}`);
  }
  CostDelivaryOfRoute():Observable<number>{
    return this.http.get<number>(`${this.url}/GetCostByDijkstraShoppingCast`);
  }

  AvgBeds(type: number, cost:number):Observable<number>{
    return this.http.get<number>(`${this.url}/submitAvgBed/${type}/${cost}`);
  }

  AvgCloset(numOfDor: number, cost:number):Observable<number>{
    return this.http.get<number>(`${this.url}/submitAvgClosets/${numOfDor}/${cost}`);
  }
  
  AvgChairs(numOfChairs: number, cost:number):Observable<number>{
    return this.http.get<number>(`${this.url}/submitAvgChairs/${numOfChairs}/${cost}`);
  }

  AvgShidot(type: number, cost:number):Observable<number>{
    return this.http.get<number>(`${this.url}/submitAvgShidot/${type}/${cost}`);
  }

  AvgSoffas(numOfMeter: number, cost:number):Observable<number>{
    return this.http.get<number>(`${this.url}/submitAvgSoffas/${numOfMeter}/${cost}`);
  }

  AvgTables(numOfMeter: number, cost:number, type:number):Observable<number>{
    return this.http.get<number>(`${this.url}/submitAvgTables/${numOfMeter}/${cost}/${type}`);
  }
}

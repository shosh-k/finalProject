import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  @Input() sumPriceProduct!:number;


  showComp:boolean = true;
  showRoute:boolean = false;
  ListOfRoute:product[]=[];
  ablePuy: boolean= true;

  constructor(private productService:ProductService) { }
  
  Pay()
  {
    this.ablePuy = false; 
    this.productService.BuyProduct(Number(sessionStorage.getItem('userId'))).subscribe((p: product[]) =>{
      if(p == null)
      {
        alert("פעולת הקניה לא הצליחה, אנא נסה שוב")
        this.ablePuy = true; 
     }
      else
      {
        this.ListOfRoute = p;
        localStorage.setItem('pro', JSON.stringify(p));
        this.showComp=false;
        this.showRoute = true
      }
    })
  }
  
  CloseShowPopUp()
  {
    this.showComp=false;
  }
  ngOnInit(): void {
  }

}

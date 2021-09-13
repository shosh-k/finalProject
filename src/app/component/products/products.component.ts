import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  userId :number;
  products: product[] | undefined ;
  
  constructor(private serProduct:ProductService) { 
    this.userId =Number(sessionStorage.getItem('userId'))
    if(sessionStorage.getItem('statusComponent') == "likeProduct")
    {
       this.serProduct.GetLikeProducts(this.userId).subscribe((a: product[])=>
       {
         if(a != null){
           this.products = a,
            console.log(a);
         }
         else
            console.log("no");
       });
    }
    else
      if(sessionStorage.getItem('statusComponent') == "shoppingCast")
        null
        else
          if(sessionStorage.getItem('statusComponent') == "MyProduct")
            null

    
  }

  ngOnInit(): void {
  }

}

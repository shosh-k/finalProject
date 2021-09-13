import { Component, OnInit ,ViewChild,ElementRef, ɵbypassSanitizationTrustHtml} from '@angular/core';
import { Router } from '@angular/router';
import { product } from 'src/app/models/product';
import { LikeProductService } from 'src/app/services/likeProduct.service';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCastService } from 'src/app/services/shoppingCast.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-choose-product',
  templateUrl: './choose-product.component.html',
  styleUrls: ['./choose-product.component.css']
})
export class ChooseProductComponent implements OnInit {
  @ViewChild('a',{static:false}) a!:ElementRef

  listChooseProduct:product[] = [];
  listProductToRout: product[] = [];
  showBuy:boolean = false;
  visible=false;
  adressOfSaler!: string;

  constructor(private productService:ProductService, private shoppingCastService: ShoppingCastService,
    private likeProductService: LikeProductService)
  { 
    if(sessionStorage.getItem('statusComponent') =="shoppingCast"){
      this.GetShoppingCast();
      this.showBuy = false;
    }
    else if(sessionStorage.getItem('statusComponent') =="likeProduct"){
      this.GetLikeProduct()
      //if(this.listChooseProduct.length > 0)
      //  this.showBuy = true;
      //else
      //  this.showBuy = false;

    }
  }
  GetShoppingCast(){
    this.productService.GetShoppingCast(Number(sessionStorage.getItem('userId'))).subscribe((p:product[])=>{
      this.listChooseProduct = p;
    });
  }
  GetLikeProduct(){
        this.productService.GetLikeProducts(Number(sessionStorage.getItem('userId'))).subscribe((p:product[])=>{
        this.listChooseProduct = p;
      });
  }
  DeletFromDb(deletChoose:product){
    if(sessionStorage.getItem('statusComponent') =="shoppingCast")
      this.shoppingCastService.DeleteFromShoppingCast(deletChoose.CodeProduct).subscribe(cp => {
        if(cp == -1)
          alert("מחיקת המוצר לא הצליחה. בדוק את החיבורים ונסה שוב.")
        else
          this.GetShoppingCast();
    });
    else if(sessionStorage.getItem('statusComponent') =="likeProduct")
      this.likeProductService.DeleteFromLikeProduct(deletChoose.CodeProduct).subscribe(clp =>{
        if(clp == -1)
        alert("מחיקת המוצר לא הצליחה. בדוק את החיבורים ונסה שוב.")
      else
        this.GetLikeProduct();
      });
  }
  BuyProduct(){
        this.visible=true;
  }
  GetSumPrice(){
    var sumPrice = 0;
    for(var i = 0; i < this.listChooseProduct.length; i++){
        var product = this.listChooseProduct[i];
        sumPrice += Number(product.PriceProduct);
    }
    return sumPrice;
}
  ngOnInit(): void {
  }
}

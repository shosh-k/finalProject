import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { likeProduct, product } from 'src/app/models/product';
import { CostService } from 'src/app/services/cost.service';
import { LikeProductService } from 'src/app/services/likeProduct.service';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product!:product;
  @ViewChild('s',{static:false}) s!:ElementRef;
  @ViewChild('n',{static:false}) n!:ElementRef;

  
  panelOpenState = true;


  pro: product = new product();
  savelp: likeProduct = new likeProduct();

  showProductDetails:boolean = false;
  showCostOffer: boolean = false
  statusP: any[] =[] ;
  sum:number = 0;
  adrss!:string;
  moveOrBuy:boolean = false;
  newOrOld:boolean = false;
  heart:boolean= true
  

  constructor(private likeProductService:LikeProductService, private productServise:ProductService, private router: Router, private userService:UserService) {
   }

  StatusP(num: number){
    this.statusP = Array(num);
  }

  ShowProductDetails(pro: product)
  {
    this.pro = pro
    this.showProductDetails=true
  }
  OpenDetail(pro: product){
    this.statusP = Array(pro.StatusProduct);
    this.userService.GetAdressOfUser(pro.CodeSallerProduct).subscribe(c =>{
      this.adrss = c;
    });
    if(pro.MoveOrBuy == 0)
    {
      this.moveOrBuy = true;
    }
    else
    {
      this.moveOrBuy = false;
    }
    if(pro.NewOrOld == 1)
      this.newOrOld = true;
    else
      this.newOrOld = false;
  }

  CloseShowProduct()
  {
    this.showProductDetails=false
    this.showCostOffer = false;
  }
 
  AddToLikeProduct()
  {
    if(sessionStorage.getItem('userId') == '-1')
    {
      if(window.confirm("אינך יכול לסמן מוצרים כל עוד לא התחברת לאפליקציה. האם ברצונך להתחבר?"))
      {
      this.router.navigate(['sign-in']);
      }
    }
    else
    {
      this.savelp.CodeProduct = this.pro.CodeProduct;
      this.savelp.CodeUser = Number(sessionStorage.getItem('userId'));
      this.productServise.AddToLikeProduct(this.savelp).subscribe(s =>{
        if(s == -1)
        alert("המערכת נתקלה בבעיה. אנא התחבר למערכת ונסה שוב.")
      })
      this.heart=false;
    }
  }
  DeletFromLikeProduct(){
    if(sessionStorage.getItem('userId') == '-1')
    {
      if(window.confirm("אינך יכול לסמן מוצרים כל עוד לא התחברת לאפליקציה. האם ברצונך להתחבר?"))
      {
      this.router.navigate(['sign-in']);
      }
    }
    else
    {
      this.likeProductService.DeleteFromLikeProduct(this.pro.CodeProduct).subscribe(clp =>{
          if(clp == -1)
          alert("סימון המוצר לא הצליח. בדוק את החיבורים ונסה שוב.")
        });
        this.heart=true;

    }
  }
  ngOnInit(): void {

    this.statusP = Array(this.product.StatusProduct);

  }

}

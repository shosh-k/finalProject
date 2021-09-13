import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from 'src/app/models/product';
import { CostService } from 'src/app/services/cost.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {
  @Input() ListOfRoute:product[]=[]
  
  adressOfSaler!:string;
  Delivary!: number;
  sumDisassemblyAndassembly!:number;
  adress:string[] = [ "aaa"];
  listToSend: product[]=[]
  aaaaa: boolean = false;
  showRoute:boolean = true;
  allDetailes: boolean = false;

  constructor(private userService:UserService, private costService:CostService, private router:Router) {
    sessionStorage.setItem('statusRout', "yes")
    costService.CostDelivaryOfRoute().subscribe(c =>{
      this.Delivary = c;
      });
   }

  ngOnInit(): void {

  }

  AllDetailes(pro:product){
     this.userService.GetAdressOfUser(pro.CodeSallerProduct).subscribe(c =>{
      this.adressOfSaler = c;
    });
    this.allDetailes = true
  }
  GetAdress(){
    return this.adressOfSaler;
  }
  ShowCostDelivary()
  {
    return this.Delivary;
  }
  SumDisassemblyAndassembly(num: any){
    console.log("abcdefghijklmnopqrstuvwxyz")
    console.log(num)
    this.sumDisassemblyAndassembly += num;
  }
  GoToTheAvragePage(){
    //this.router.navigate(['avg-buy-of-user/' + this.listToSend]);
    this.aaaaa = true;
    this.showRoute = false
  }
  FullListToSend(pro:product){
    this.listToSend.push({
      CodeProduct: pro.CodeProduct,
      NameProduct:pro.NameProduct,
      CategoryProduct: pro.CategoryProduct,
      SubCategoryProduct: pro.SubCategoryProduct,
      CodeSallerProduct: pro.CodeSallerProduct,
      PriceProduct: pro.PriceProduct,
      DescriptionProduct: pro.DescriptionProduct,
      StatusProduct: pro.StatusProduct,
      MoveOrBuy: pro.MoveOrBuy,
      NewOrOld : pro.NewOrOld,
      ProductSold: pro.ProductSold
    })
  }
}




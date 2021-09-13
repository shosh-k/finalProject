import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { categories, subCategories } from 'src/app/models/categories';
import { product } from 'src/app/models/product';
import { CategoryService } from 'src/app/services/categories.service';
import { CostService } from 'src/app/services/cost.service';
import { ProductService } from 'src/app/services/product.service';
import { SortAndFilterService } from 'src/app/services/sortAndFilter.service';

interface sortBy {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  listOfProducts: product[] = [];
  listOfCaterory: categories[]=[];
  listOfSubCaterory: subCategories[] = [];
  ShowCat: boolean = true;
  ShowSubCat: boolean = false;
  nameCategory!:string;
  showFiller = false;

  searchText = '';
  characters = this.listOfProducts
  valueSlide:number = 5000;


  sortList: sortBy[]=[
    {value: 1 ,viewValue:"קרבת המוצר" },
    {value: 2 ,viewValue:"מחיר מהנמוך לגבוה" },
    {value: 3 ,viewValue:"מחיר מהגבוה לנמוך" },
    {value: 4 ,viewValue:"מצב המוצר"}
  ];

  constructor(private sortAndFilterService:SortAndFilterService, private productServise:ProductService,
     private categoryService: CategoryService, private router:Router) { 
    
      productServise.GetAllProducts().subscribe((p:product[] )=> {
      this.listOfProducts = p;
      });
      this.categoryService.GetCategories().subscribe((c:categories[]) =>{
        this.listOfCaterory = c;
        });
    if(sessionStorage.getItem('statusComponent')=="MyProduct")
        productServise.GetProductsOfUser(Number(sessionStorage.getItem('userId'))).subscribe((p:product[] )=> {
          this.listOfProducts = p;
          });
  }
  Categories(){
    this.ShowCat = true;
    this.ShowSubCat = false;
  }

  SortBy(selectSort: sortBy){
    if(selectSort.value == 1)
    {
      if(sessionStorage.getItem('userId') == "-1")
      {
        if(window.confirm("מיון המוצרים לפי קירבתם אליך מחייבת כניסה לאפליקציה. האם ברצונך להתחבר?"))
        {
        this.router.navigate(['sign-in']);
        }
      }
      else
        this.sortAndFilterService.GetProductOrderByLocation(Number(sessionStorage.getItem('userId'))).subscribe(c=>{
          this.listOfProducts = c;
        });
    }

    else if(selectSort.value == 2)
      this.sortAndFilterService.GetProductOrderByPriceLowToHigh(this.listOfProducts).subscribe(c=>{
        this.listOfProducts = c;
      });
      else if(selectSort.value == 3)
        this.sortAndFilterService.GetProductOrderByPriceHighToLow(this.listOfProducts).subscribe(c=>{
          this.listOfProducts = c;
        });
        else if(selectSort.value == 4)
          this.sortAndFilterService.GetProductsOrderByStatus(this.listOfProducts).subscribe(c=>{
            this.listOfProducts = c;
          });
  }
  SelectCategory(selectCategory: categories){
    this.sortAndFilterService.GetProductsByCategory(selectCategory.CodeCategory).subscribe((lp: product[])=>{
      this.listOfProducts = lp;
    });
    this.categoryService.GetSubCategories(selectCategory.CodeCategory).subscribe((sc:subCategories[]) =>{
      this.listOfSubCaterory = sc
    });
    this.ShowCat = false;
    this.ShowSubCat = true;
    this.nameCategory = selectCategory.NameCategory;
  }

  SelectProductBySubCategory(selectSubCategory: subCategories){
    this.sortAndFilterService.GetProductsBySubCategory(selectSubCategory.CodeSubCategory).subscribe((lp: product[])=>{
      this.listOfProducts = lp;
    });
  }
  ProductToMove(){
    this.sortAndFilterService.GetProductToMove().subscribe((lp: product[])=>{
      this.listOfProducts = lp;
    });
  }
  ProductToBuy(){
    this.sortAndFilterService.GetProductToBuy().subscribe((lp: product[])=>{
      this.listOfProducts = lp;
    });
  }
  NewProduct(){
    this.sortAndFilterService.GetAllNewProduct().subscribe((lp: product[])=>{
      this.listOfProducts = lp;
    });
  }
  OldProduct(){
    this.sortAndFilterService.GetAllOldProduct().subscribe((lp: product[])=>{
      this.listOfProducts = lp;
    });
  }

  GetProductFilterCost() {
    this.sortAndFilterService.GetProductFilterCost(this.valueSlide).subscribe((lp:product[]) => {
      this.listOfProducts = lp;
    });
 }
  ngOnInit(): void {
  }

}

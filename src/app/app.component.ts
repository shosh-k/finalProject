import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { categories } from './models/categories';
import { product } from './models/product';
import { CategoryService } from './services/categories.service';

interface st {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'comforTableClientSide';
  showHome:boolean=true
  stutus: st[]=[
    {value:"signIn" ,viewValue:"התחברות" },
    {value:"signUp" ,viewValue:"משתמש חדש" },
    {value:"likeProduct", viewValue:"מוצרים שאהבתי"},
    {value:"shoppingCast", viewValue:"עגלת קניות"},
    {value:"myAdvartisement", viewValue:"מודעות שלי"},
    {value:"exit" ,viewValue:"התנתקות" }
  ];
  cat : categories[] =[];
  products:product[] = [];
  constructor(private router:Router, private ser: CategoryService) { 
    sessionStorage.setItem('showHome', "yes");
    sessionStorage.setItem('userId', "-1");
    sessionStorage.setItem('statusRout', "no");


  }

  ngOnInit(): void {

  }
  Advertisement(){
    if(sessionStorage.getItem('userId') == "-1")
    {
      if(window.confirm("עדיין לא התחברת לאפליקציה. האם ברצונך להחבר?"))
      {
        this.router.navigate(['sign-in']);
      }
    }
    else
    {
      this.showHome=false;
      this.router.navigate(['advertisement']);
    }

  }
  checkValue(val:st)
  {
    if(val.value == "signIn")
      this.router.navigate(['sign-in']);
    else
      if(val.value == "signUp")
        this.router.navigate(['sign-Up']);
      else
        if(val.value == "exit")
        {
          sessionStorage.setItem('userId',"-1");
          console.log(sessionStorage.getItem('userId'))
        }
        else if(val.value == "likeProduct")
          this.LikeProduct();
          else if(val.value == "shoppingCast")
            this.MyShoppingCast();
            else if(val.value == "myAdvartisement")
              this.MyAdvertisement();
  }
LikeProduct(){
  if(sessionStorage.getItem('userId') == "-1")
  {
    if(window.confirm("עדיין לא התחברת לאפליקציה. האם ברצונך להחבר?"))
      {
      this.router.navigate(['sign-in']);
      }
  }
  else
  {
    sessionStorage.setItem('statusComponent', "likeProduct");
    this.showHome=false;
    this.router.navigate(['choose-product']);
  }
} 
Home(){
  if(sessionStorage.getItem('userId') != "-1")
  {
    this.router.navigate(['home']);
  }
}
MyAdvertisement(){
  if(sessionStorage.getItem('userId') == "-1")
  {
    if(window.confirm("עדיין לא התחברת לאפליקציה. האם ברצונך להחבר?"))
    {
      this.router.navigate(['sign-in']);
    }
  }
  else
  {
    sessionStorage.setItem('statusComponent', "MyProduct");
    this.showHome=true;
    
  }
}
MyShoppingCast(){
    if(sessionStorage.getItem('userId') == "-1")
    {
      if(window.confirm("עדיין לא התחברת לאפליקציה. האם ברצונך להחבר?"))
      {
      this.router.navigate(['sign-in']);
      }
    }
    
    else
    {
      sessionStorage.setItem('statusComponent', "shoppingCast");
      this.showHome=false;
      this.router.navigate(['choose-product']);
    }
  }
  
}

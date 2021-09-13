import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Users } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { CategoryService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  showComp: boolean = true; 
  user: Users = new Users();
  @ViewChild('myHtml',{static:false}) placeRef!:ElementRef;
  
  formattedaddress=" ";
  options={
    componentRestrictions:{
      country:["IL"],
      language:["Hebrew"]
    }
  }
  public AddressChange(address: any) {
  //setting address from API to local variable
   this.formattedaddress=String(address.formatted_address);
   this.user.AddresstUser=String(address.formatted_address);
}

  title = 'rou';

  constructor(private userService: UserService, private catServive: CategoryService) { 
    this.showComp = true
  }

  AddComp(){
    try {
      this.userService.signup(this.user).subscribe(userId => {
        if(userId != 0)
        {
        sessionStorage.setItem('userId',userId.toString());
        console.log("ok");
        this.showComp = false;
        }
        else
        alert("במערכת יש כבר את מספר הטלפון שהזנתה. בדוק שאין בו טעות או אולי פתחת בעבר חשבון באתר")
        });
      }      
    catch (error) {
      alert("שגיאה בהכנסת הנתונים")
    }
   }     
   CloseShowPopUp()
   {
     this.showComp=false;
   }
 
  ngOnInit(): void {
  }
}

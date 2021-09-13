import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  PasswordUser: string | undefined;
  PhoneUser: string | undefined;
  showComp: boolean = true;
  showPop: boolean = true
  
  constructor(private ser:UserService,private router:Router) { 
    this.showComp = true;
  }

  ngOnInit(): void {
  }

  login()
  {
     this.ser.signIn(this.PhoneUser,this.PasswordUser).subscribe(userId=>
     {
      if(userId!=0)
      {
        sessionStorage.setItem('userId',userId.toString())
        this.showComp = false
      }
      else
        if(window.confirm("אחד או יותר מהנתונים שהוקשו שגוי. האם ברצונך לעבור לדף ההרשמה?"))
        {
          this.router.navigate(['sign-Up']);
        }
    });
  }
  CloseShowPopUp()
  {
    this.showComp=false;
  }
  OpenShowPopUp(){
    this.showPop = true;
  }
}      

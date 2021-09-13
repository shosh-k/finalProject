import { Component, Input, OnInit } from '@angular/core';
import { product } from 'src/app/models/product';
import { CostService } from 'src/app/services/cost.service';

@Component({
  selector: 'app-avg-buy-of-user',
  templateUrl: './avg-buy-of-user.component.html',
  styleUrls: ['./avg-buy-of-user.component.css']
})
export class AvgBuyOfUserComponent implements OnInit {
  @Input() ListOfroute:product[]=[]

  showBed:boolean = false;
  showCloset:boolean = false;
  showTable:boolean = false;
  showChair:boolean = false;
  showShidot:boolean = false;
  needPeruk:boolean = false;
  showMeter:boolean = false;

  selectedBed!:number;
  selectedPeruk!: boolean;
  selectedShidot!:boolean;
  numOfDor!:number;
  MetrsOfItem!: number;
  numOfChair!: number;
  metrsOfSoffa!: number;
  CostPeruk!:number;

  constructor(private costService:CostService) { }

  ngOnInit(): void {
  }

  AvgFromUser(subCategory:number){
    if(subCategory == 15 || subCategory == 18)
       this.showBed = true;
     else
       this.showBed = false;
 
     if(subCategory == 4 || subCategory == 10 || subCategory == 13
       || subCategory == 19|| subCategory == 24|| subCategory == 28
       || subCategory == 35)
       this.showCloset = true;
     else
       this.showCloset = false;
     if(subCategory == 2 || subCategory == 7 || subCategory == 29)
     {
        this.showTable = true;
        this.needPeruk = true;
        this.showMeter = true;
     }
     else
     {
        this.showTable = false;
        this.needPeruk = false;
        this.showMeter = false;
     }
     if( subCategory == 3 ||  subCategory == 8 || subCategory == 21
       || subCategory == 30)
       this.showChair = true;
     else
       this.showChair = false;
     if( subCategory == 14 || subCategory == 20 ||subCategory == 31
       || subCategory == 36)
       {
         this.showShidot = true;
         this.needPeruk = true
       }
     else
     {
        this.showShidot = false;
        this.needPeruk = false;
     }
     if( subCategory == 1)
     this.showMeter = true;
     else
     this.showMeter = false;
    }

  submit(subCategory: number){
    if(subCategory == 15 || subCategory == 18)
    this.costService.AvgBeds(this.selectedBed, this.CostPeruk).subscribe(c=>{
      console.log(c);
    });
     if(subCategory == 4 || subCategory == 10 || subCategory == 13
       || subCategory == 19|| subCategory == 24|| subCategory == 28
       || subCategory == 35)
       this.costService.AvgCloset(this.numOfDor, this.CostPeruk).subscribe(c=>{
        console.log(c);
      });
     if(subCategory == 2 || subCategory == 7 || subCategory == 29)
     this.costService.AvgTables(this.MetrsOfItem, this.CostPeruk, this.selectedPeruk?1:0).subscribe(c=>{
      console.log(c);
    });
     if( subCategory == 3 ||  subCategory == 8 || subCategory == 21
       || subCategory == 30)
       this.costService.AvgChairs(this.numOfChair, this.CostPeruk).subscribe(c=>{
        console.log(c);
      });
     if( subCategory == 14 || subCategory == 20 ||subCategory == 31
       || subCategory == 36)
       this.costService.AvgShidot(this.selectedPeruk?1:0, this.CostPeruk).subscribe(c=>{
        console.log(c);
      });
     if( subCategory == 1)
     this.costService.AvgSoffas(this.MetrsOfItem, this.CostPeruk).subscribe(c=>{
      console.log(c);
    });
  }

}

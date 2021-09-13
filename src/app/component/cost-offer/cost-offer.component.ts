import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { likeProduct, product } from 'src/app/models/product';
import { CostService } from 'src/app/services/cost.service';

@Component({
  selector: 'app-cost-offer',
  templateUrl: './cost-offer.component.html',
  styleUrls: ['./cost-offer.component.css']
})
export class CostOfferComponent implements OnInit {
  @Input() subCategory!:number;
  @Input() CodeProduct!:number;

  @Output() DisassemblyAndassembly: EventEmitter<number> = new EventEmitter();

  showBed:boolean = false;
  showCloset:boolean = false;
  showTable:boolean = false;
  showChair:boolean = false;
  showShidot:boolean = false;
  showSoffa:boolean = false;
  showDelivery:boolean = false;
  showCostOffer: boolean = false
  
  selectedBed!:number;
  selectedTable!: boolean;
  selectedShidot!:boolean;
  numOfDor!:number;
  MetrsOfTable!: number;
  numOfChair!: number;
  metrsOfSoffa!: number;

  costDelivery!:number;
  perukAndHarkava!:number;

  signal: string[] = []
  buy:boolean = false;
  start:boolean = true;
  constructor( private costService:CostService) {
    this.signal = ["a"]
    if(sessionStorage.getItem("ifBuy")=="yes")
      this.buy = true;
    else
      this.buy = false;
    }


   ShowCostProduct(subCategory:number)
   {
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
        this.showTable = true;
     else
       this.showTable = false;
     if( subCategory == 3 ||  subCategory == 8 || subCategory == 21
       || subCategory == 30)
       this.showChair = true;
     else
       this.showChair = false;
     if( subCategory == 14 || subCategory == 20 ||subCategory == 31
       || subCategory == 36)
       this.showShidot = true;
     else
       this.showShidot = false;
     if( subCategory == 1)
       this.showSoffa = true;
     else
       this.showSoffa = false;
 
     if(sessionStorage.getItem('userId') != "-1")
     if(sessionStorage.getItem('statusRout') == "no")
     {
       this.showDelivery = true;
       this.costService.CostOfferDelivery(Number(sessionStorage.getItem('userId')), this.CodeProduct).subscribe(b=> {
         this.costDelivery = b;
       })
     }   
}

   costOfferBed(){
    console.log(this.selectedBed)
    this.costService.CostOfferBeds(this.selectedBed).subscribe(b=> {
      this.perukAndHarkava = b 
      this.DisassemblyAndassembly.emit(b)
    });
      this.showCostOffer = true;
  }
  costOfferCloset(){
    console.log(this.selectedBed)
    this.costService.CostOfferCloset(this.numOfDor).subscribe(d=> {
      this.perukAndHarkava = d;
      this.DisassemblyAndassembly.emit(d);
    })
      this.showCostOffer = true;

  }
  costOfferTable(){
    this.costService.CostOfferTable(this.MetrsOfTable, this.selectedTable).subscribe(d=> {
      this.perukAndHarkava = d;
      this.DisassemblyAndassembly.emit(d);
    })
      this.showCostOffer = true;

  }
  costOfferChair(){
    this.costService.CostOfferChair(this.numOfChair).subscribe(d=> {
      this.perukAndHarkava = d;
      this.DisassemblyAndassembly.emit(d);
    })
      this.showCostOffer = true;
  }
  costOfferShidot(){
    this.costService.CostOfferShidot(this.selectedShidot).subscribe(d=> {
      this.perukAndHarkava = d;
      this.DisassemblyAndassembly.emit(d);
    })
      this.showCostOffer = true;
  }
  
  costOfferSoffa(){
    this.costService.CostOfferSoffa(this.metrsOfSoffa).subscribe(d=> {
      this.perukAndHarkava = d;
      this.DisassemblyAndassembly.emit(d);
    })
      this.showCostOffer = true;
  }
  ngOnInit(): void {
  }

}

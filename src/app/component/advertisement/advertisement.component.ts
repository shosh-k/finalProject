import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { product } from 'src/app/models/product';
import { CityService } from 'src/app/services/city.service';
import { ImageService } from 'src/app/services/Image.service';
import { HttpClient } from '@angular/common/http';
import { images } from 'src/app/models/image';
import { CategoryService } from 'src/app/services/categories.service';
import { categories, subCategories } from 'src/app/models/categories';



@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.css']
})
export class AdvertisementComponent implements OnInit {
  pro: product=new product();
  selectedFile!:File;
  Image: images = new images();
  listOfCaterory: categories[] =[];
  listOfSubCaterory: subCategories[] =[];
  selectCategory!: number;
  selectSubCategory!: number;
   

  constructor(private ser:ProductService, private imageService:ImageService, private http : HttpClient, private categoryService:CategoryService) {
    categoryService.GetCategories().subscribe((c:categories[]) =>{
      this.listOfCaterory = c;
      console.log(c) });
   }

  ngOnInit(): void {
  }
  onUpload(){
    console.log("come to upload function")
    const formData: FormData = new FormData();
    formData.append('imafe', this.selectedFile, this.selectedFile.name);
    console.log(formData +"shoshiKatz")
    this.http.post("https://file.io", formData).subscribe(res => 
      {
        console.log(res);
      }
    );
  }

  AddProduct()
  {
    this.pro.CodeSallerProduct = Number(sessionStorage.getItem('userId'));
    this.pro.CategoryProduct = this.selectCategory;
    this.pro.SubCategoryProduct = this.selectSubCategory;
    this.pro.ProductSold = 0;
    this.ser.addnewproduct(this.pro).subscribe((a: any)=>{
      console.log(a)
      if(a != -1)
      alert("המוצר נוסף בהצלחה.")
    });
  }
  OnFileSelected(event:any){
    console.log(event);
    this.selectedFile = <File>event.target.files[0];

  }

  SelectCategory(){
    this.categoryService.GetSubCategories(this.selectCategory).subscribe((sc:subCategories[]) =>{
      this.listOfSubCaterory = sc
    });
  
  }
  
}



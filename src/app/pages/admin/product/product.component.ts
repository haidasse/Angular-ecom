import { CommonModule } from '@angular/common';
import { ProductServiceService } from './../../../services/product-service.service';
import { Component,OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
 isSidbar:boolean=false;
 data:any={
  Id:"1",
  Name:"jjjj",
  Price:"",
  Categoreis:"",
  Qte:"",
  Date:new Date()
};
constructor(private ProductServiceService:ProductServiceService){

}
  ngOnInit(): void {
    this.ProductServiceService.getCategoreis().subscribe((data)=>{
      console.log(data);
    });
  }
openSid(){
  this.isSidbar=true;
}
closeSid(){
  this.isSidbar=false;
}

}

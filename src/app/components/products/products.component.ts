import { Component } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Product} from "../../model/product.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  constructor(private productsService:ProductsService) {}

  // products: Product[]|null = null ;
  // products?: Product[];
  products$:Observable<Product[]>| null = null ;

  ngOnInit():void{

  }

  onGetAllProducts() {
    // this.productsService.getAllProducts().subscribe(data=>{
    //   this.products = data ;
    // })
    this.products$= this.productsService.getAllProducts()

  }
}

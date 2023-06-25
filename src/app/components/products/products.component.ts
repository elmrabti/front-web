import { Component } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Product} from "../../model/product.model";
import {catchError, map, Observable, of, startWith} from "rxjs";
import {AppDataState, DataStateEnum} from "../../state/product.state";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  constructor(private productsService:ProductsService) {}

  // products: Product[]|null = null ;
  // products?: Product[];
  products$:Observable<AppDataState<Product[]>>| null = null ;
  readonly DataStateEnum=DataStateEnum;

  ngOnInit():void{

  }

  onGetAllProducts() {
    // this.productsService.getAllProducts().subscribe(data=>{
    //   this.products = data ;
    // })
    this.products$=
      this.productsService.getAllProducts().pipe(
        map(data=>({dataState:DataStateEnum.LOADED, data:data})),
        startWith({dataState: DataStateEnum.LOADING}),
        catchError(err => of({dataState: DataStateEnum.ERROR}))
      );

  }

  // protected readonly DataStateEnum = DataStateEnum;
}

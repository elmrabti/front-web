import { Component } from '@angular/core';
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  constructor(private productsService: ProductsService) {

  }

  onGetAllProducts() {

  }
}

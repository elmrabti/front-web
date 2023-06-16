import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product.model";
import {environment} from "../../environments/environment";

@Injectable({providedIn:"root"})
export class ProductsService{
  constructor(private http:HttpClient) {
  }

  getAllProducts():Observable<Product[]>{
    let host:string=environment.host
    return this.http.get<Product[]>(host+"/products");
  }

  getSelectedProducts():Observable<Product[]>{
    let host = environment.host
    return this.http.get<Product[]>(host+"/products?selected=true");
  }


  getAvailableProducts():Observable<Product[]>{
    let host = environment.host
    return this.http.get<Product[]>(host+"/products?available=true");
  }




}

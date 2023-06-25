import {Product} from "../model/product.model";

export enum DataStateEnum{
  LOADING,
  LOADED,
  ERROR
}

export interface AppDataState<T>{
  dataState?: DataStateEnum,
  data?: T,
  errorMessage?: string
}

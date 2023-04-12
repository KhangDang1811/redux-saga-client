
import { Product } from './action';

// actionTypes.ts
export const CREATE_PRODUCT = 'CREATE_PRODUCT'
export const CREATE_PRODUCT_REQUEST = 'CREATE_PRODUCT_REQUEST';
export const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS';
export const CREATE_PRODUCT_FAILURE = 'CREATE_PRODUCT_FAILURE';

export const FETCH_PRODUCT = 'FETCH_PRODUCT'
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS'
export const FETCH_PRODUCT_FAILURE = 'FETCH_PRODUCT_FAILURE'


export interface AddProductAction {
    type: typeof CREATE_PRODUCT
    product: Product
  }

  export interface AddProductRequestAction {
    type: typeof CREATE_PRODUCT_REQUEST
    product: Product
  }

  export interface AddProductSuccessAction {
    type: typeof CREATE_PRODUCT_SUCCESS
    product: Product
  }

  export interface AddProductFailureAction {
    type: typeof CREATE_PRODUCT
    
  }

  export interface FetchProductAction {
    type: typeof FETCH_PRODUCT
    product: Product
  }

  export interface FetchProductSuccessAction {
    type: typeof FETCH_PRODUCT_SUCCESS
    product: Product
  }

  export interface FetchProductFailureAction {
    type: typeof FETCH_PRODUCT_FAILURE
   
  }

export type CartActionTypes =
  | AddProductAction
  | AddProductRequestAction
  | AddProductSuccessAction
  | AddProductFailureAction
  | FetchProductAction
  | FetchProductSuccessAction
  | FetchProductFailureAction

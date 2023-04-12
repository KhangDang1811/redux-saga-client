// actions.ts
import {
    CREATE_PRODUCT_REQUEST,
    CREATE_PRODUCT_SUCCESS,
    CREATE_PRODUCT_FAILURE,
    FETCH_PRODUCT,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAILURE,
  } from './actionTypes';
  
export interface Product {
    title: string;
    // price: number;
  }
  
  export const FetchProduct = () => ({
    type: FETCH_PRODUCT,
    
  });

  export const FetchProductSuccess = (product: Product) => ({
    type: FETCH_PRODUCT_SUCCESS,
    product,
  });

  export const FetchProductFailure = (error: Error) => ({
    type: FETCH_PRODUCT_FAILURE,
     payload: { error },
  });

  export const createProductRequest = (product: Product) => ({
    type: CREATE_PRODUCT_REQUEST,
    product,
  });
  
  export const createProductSuccess = () => ({
    type: CREATE_PRODUCT_SUCCESS,
  });
  
  export const createProductFailure = (error: Error) => ({
    type: CREATE_PRODUCT_FAILURE,
    payload: { error },
  });
  
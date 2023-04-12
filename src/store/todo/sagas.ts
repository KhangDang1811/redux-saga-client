import { call, put, takeLatest } from 'redux-saga/effects';
import { createProductSuccess, createProductFailure, FetchProductSuccess, FetchProductFailure } from './action';
import { CREATE_PRODUCT_REQUEST, FETCH_PRODUCT } from './actionTypes';
import { createProduct, fetchProduct } from "../api/index";

export function* createProductSaga(action: any) {

  // console.log("aaa",action)
  try {
    yield call(createProduct, action.product.title);
    yield put(createProductSuccess());
  } catch (error:any) {
     yield put(createProductFailure(error));
  }
}

export function* fetchProductSaga(action: any): Generator<any, void, any> {
  
  try {
   const product = yield call(fetchProduct);
   console.log("adc",product);
   
    yield put(FetchProductSuccess(product));
  } catch (error:any) {
     yield put(FetchProductFailure(error));
  }
}

export function* watchCreateProduct() {
  yield takeLatest(CREATE_PRODUCT_REQUEST, createProductSaga);
  yield takeLatest(FETCH_PRODUCT, fetchProductSaga);
}

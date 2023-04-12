// rootSaga.ts
import { all } from 'redux-saga/effects';
import { watchCreateProduct } from './todo/sagas';

export default function* rootSaga() {
  yield all([watchCreateProduct()]);
}

// selector.ts
import { createSelector } from 'reselect';
import { RootState } from '../rootReducer';

export const getProductState = (state: RootState) => state.createPost.data;

// export const getProductLoading = createSelector(
//   getProductState,
//   (product) => product.loading
// );

// export const getProductError = createSelector(
//   getProductState,
//   (product) => product.error
// );

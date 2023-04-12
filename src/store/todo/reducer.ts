// reducer.ts
import {
  CREATE_PRODUCT,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAILURE,
  FETCH_PRODUCT,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
} from './actionTypes';

export interface ProductState {
  data:[],
  loading: boolean;
  error: Error | null;
}

const initialState: ProductState = {
  data:[],
  loading: false,
  error: null,
};

const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_PRODUCT:
      return {
        ...state,
        loading: true,
        error: null,
      };
      case FETCH_PRODUCT_SUCCESS:
        return {
          ...state,
          data: action.product,
          loading: false,
          error: null,
        };
        case FETCH_PRODUCT_FAILURE:
          return {
            ...state,
            loading: true,
            error: action.payload.error,
          };
    case CREATE_PRODUCT:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CREATE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        // data: [...state.data, action.payload],
        loading: false,
        error: null,
      };
    case CREATE_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default productReducer;

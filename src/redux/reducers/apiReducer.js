import {
  ADD_NEW_PRODUCT,
  API_REQUEST_ERROR,
  API_REQUEST_SUCCESS,
  SORT_PRODUCTS,
} from "../consts";

const initialState = {
  products: [],
  isloading: true,
  error: "",
};

export const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case API_REQUEST_SUCCESS:
      return {
        ...state,
        isloading: action.paylaod.isLoading,
        products: action.paylaod.products,
      };
    case API_REQUEST_ERROR:
      return {
        ...state,
        isloading: action.paylaod.isLoading,
        error: action.paylaod.error,
      };
    case ADD_NEW_PRODUCT:
      return {
        ...state,
        products: action.paylaod,
      };
    case SORT_PRODUCTS:
      return {
        ...state,
        products: action.paylaod,
      };
    default:
      return {
        ...state,
      };
  }
};

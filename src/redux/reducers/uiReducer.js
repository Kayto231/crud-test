import { API_REQUEST_ERROR, API_REQUEST_SUCCESS } from "../consts";

const initialState = {};

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
    default:
      return {
        ...state,
      };
  }
};

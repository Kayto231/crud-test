import axios from "axios";
import { URLS } from "../../URLS/URLS";
import {
  ADD_NEW_PRODUCT,
  API_REQUEST_ERROR,
  API_REQUEST_SUCCESS,
  SORT_PRODUCTS,
} from "../consts";

export const apiRequestSuccessAction = (obj) => ({
  type: API_REQUEST_SUCCESS,
  paylaod: obj,
});

export const apiRequestErrorAction = (obj) => ({
  type: API_REQUEST_ERROR,
  paylaod: obj,
});

export const addNewProductAction = (array) => ({
  type: ADD_NEW_PRODUCT,
  paylaod: array,
});

export const sortProductsAction = (array) => ({
  type: SORT_PRODUCTS,
  paylaod: array,
});

export const apiRequestFunction = () => {
  return async (dispatch) => {
    try {
      const productsResponse = await axios
        .get(URLS.productURL)
        .then((res) => res.data);
      if (!productsResponse) throw Error();

      dispatch(
        apiRequestSuccessAction({
          isLoading: false,
          products: productsResponse,
        })
      );
    } catch (error) {
      dispatch(
        apiRequestErrorAction({
          error: "Something went wrong while fetching data",
          isLoading: false,
        })
      );
    }
  };
};
export const addNewProductFunction = (
  { productName, imgUrl, count, size, weight },
  products
) => {
  return async (dispatch) => {
    try {
      const [height, width] = size.split("x");
      const newObj = {
        name: productName,
        imageUrl: imgUrl,
        count,
        size: { height, width },
        weight,
      };
      console.log(newObj);
      const response = await axios
        .post(URLS.productURL, newObj)
        .then((res) => res.data);

      dispatch(addNewProductAction([...products, response]));
    } catch (error) {
      console.log(error);
    }
  };
};

export const editProductFunction = (
  { id, productName, imgUrl, count, size, weight },
  products
) => {
  return async (dispatch) => {
    try {
      const [height, width] = size.split("x");
      const newObj = {
        name: productName,
        imageUrl: imgUrl,
        count,
        size: { height, width },
        weight,
      };
      const response = await axios
        .put(URLS.productURL + `/${id}`, newObj)
        .then((res) => res.data);

      const filteredArray = products.filter((product) => product.id !== id);

      const finalArray = [...filteredArray, response];

      dispatch(addNewProductAction(finalArray.sort((a, b) => a.id - b.id)));
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteProductFunction = ({ id }) => {
  return async (dispatch) => {
    try {
      await axios.delete(URLS.productURL + `/${id}`).then((res) => res.data);
      const productsResponse = await axios
        .get(URLS.productURL)
        .then((res) => res.data);

      dispatch(
        apiRequestSuccessAction({
          isLoading: false,
          products: productsResponse,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const sortByTitleFunction = (products) => {
  return (dispatch) => {
    const sortedByTitle = products.sort(SortArray);

    dispatch(sortProductsAction(sortedByTitle));
  };
};
export const sortByCountFunction = (products) => {
  return (dispatch) => {
    const sortedByCount = products.sort((a, b) => b.count - a.count);
    dispatch(sortProductsAction(sortedByCount));
  };
};

function SortArray(x, y) {
  if (x.name < y.name) {
    return -1;
  }
  if (x.name > y.name) {
    return 1;
  }
  return 0;
}

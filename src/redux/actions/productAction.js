import martApi from "../../api/martApi";
import { ActionType } from "../constants/actionType";

export const setProducts = (products) => {
  return {
    type: ActionType.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionType.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionType.REMOVE_SELECTED_PRODUCT,
  };
};

export const fetchProducts = () => async (dispatch) => {
  const response = await martApi.get("/products");
  dispatch({ type: ActionType.FETCH_PRODUCTS, payload: response.data });
};

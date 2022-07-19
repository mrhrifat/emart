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

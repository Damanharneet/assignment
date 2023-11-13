import axiosInstance from "../../urlConfig";
import { getAllProductsConstant } from "../constants";

export const getAllProducts = () => {
  return async (dispatch) => {
    dispatch({ type: getAllProductsConstant.GET_ALL_PRODUCTS_SUCCESS });
    const res = await axiosInstance.get(`products`);
    if (res.status === 200) {
      dispatch({
        type: getAllProductsConstant.GET_ALL_PRODUCTS_SUCCESS,
        payload: res.data,
      });
    } else {
      const { error } = res.data;
      dispatch({
        type: getAllProductsConstant.GET_ALL_PRODUCTS_FAILURE,
        payload: error,
      });
    }
  };
};

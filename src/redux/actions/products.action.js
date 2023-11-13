import axiosInstance from "../../urlConfig";
import axiosInstanceServer from "../../serverApi"
import { getAllProductsConstant,getProductFromServerConstant} from "../constants";

export const getAllProducts = () => {
  return async (dispatch) => {
    dispatch({ type: getAllProductsConstant.GET_ALL_PRODUCTS_SUCCESS });
    const res = await axiosInstance.get(`products`);
    if (res.status === 200) {
      console.log(res)
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

export const getProductFromServer =(count,limit) =>{
  return async(dispatch) =>{

    dispatch({ type: getProductFromServerConstant.GET_PRODUCT_FROM_SERVER_REQUEST  });
    const res = await axiosInstanceServer.get(`products/${count}/${limit}`);
    if (res.status === 200) {
      
    return  dispatch({
        type: getProductFromServerConstant.GET_PRODUCT_FROM_SERVER_SUCCESS,
        payload: res.data.products,
      });
    } else {
      const { error } = res.data;
      dispatch({
        type: getProductFromServerConstant.GET_PRODUCT_FROM_SERVER_FAILURE,
        payload: error,
      });
    }
  }
}

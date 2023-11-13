import { getAllProductsConstant } from "../constants";

const initState = {
  products: [],
  error: null,
  loading: false,
};

export default (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case getAllProductsConstant.GET_ALL_PRODUCTS_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case getAllProductsConstant.GET_ALL_PRODUCTS_SUCCESS:
      state = {
        ...state,
        products: action.payload,
      };
      break;
    case getAllProductsConstant.GET_ALL_PRODUCTS_FAILURE:
      state = {
        ...state,
        error: action.payload,
      };
  }
  return state;
};

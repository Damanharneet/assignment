import {
  addToCartConstant,
  clearCartConstant,
  removeCartItemConstant,
} from "../constants";

const initState = {
  cartItems: {},
  updatingCart: false,
  error: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case addToCartConstant.ADD_TO_CART_REQUEST:
      state = {
        ...state,
        updatingCart: true,
      };
      break;
    case addToCartConstant.ADD_TO_CART_SUCCESS:
      state = {
        ...state,
        cartItems: action.payload,
        updatingCart: false,
      };
      break;
    case addToCartConstant.ADD_TO_CART_FAILURE:
      state = {
        ...state,
        error: action.payload,
      };
      break;
    case removeCartItemConstant.REMOVE_CART_ITEM_SUCCESS:
      state = {
        ...state,
        updatingCart: false,
        cartItems: Object.keys(state.cartItems).reduce((obj, key, index) => {
          if (key !== action.payload.toString()) {
            return {
              ...obj,
              [key]: state.cartItems[key],
            };
          }
          return obj;
        }, {}),
      };
      break;
    case clearCartConstant.CLEAR_CART_SUCCESS:
      state = {
        ...initState,
      };
  }
  return state;
};

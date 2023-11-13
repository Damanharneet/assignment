import {
  addToCartConstant,
  removeCartItemConstant,
  clearCartConstant,
} from "../constants";
import store from "../store";


//add to cart items
export const addToCart = (product, newQty = 1) => {
  console.log(product);
  return async (dispatch) => {
    const { cartItems } = store.getState().cart;
    //copy the cart to avoid the duplicate
    const newcart = Object.keys(cartItems).length > 0 ? { ...cartItems } : {};
    const quantity = cartItems[product.id]
      ? parseInt(cartItems[product.id].quantity + newQty)
      : 1;
    newcart[product.id] = {
      ...product,
      quantity,
    };
    localStorage.setItem("cart", JSON.stringify(newcart));
    dispatch({
      type: addToCartConstant.ADD_TO_CART_SUCCESS,
      payload: newcart,
    });
  };
};

//get all cart items from local storage as soon as app loads
export const getCartItems = () => {
  return async (dispatch) => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    if (Object.keys(cartItems).length > 0) {
      return dispatch({
        type: addToCartConstant.ADD_TO_CART_SUCCESS,
        payload: cartItems,
      });
    }
  };
};

// remove cartItem depending on Id
export const removeCartItem = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: removeCartItemConstant.REMOVE_CART_ITEM_REQUEST });
      //remove particular cart item from local storage
      const cartItem = JSON.parse(localStorage.getItem("cart")) || [];
      delete cartItem[id];
      localStorage.setItem("cart", JSON.stringify(cartItem));
      dispatch({
        type: removeCartItemConstant.REMOVE_CART_ITEM_SUCCESS,
        payload: id,
      });
    } catch (err) {
      dispatch({ type: removeCartItemConstant.REMOVE_CART_ITEM_FAILURE });
    }
  };
};

//clear the cart from localstorage
export const clearCart = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: clearCartConstant.CLEAR_CART_REQUEST });
      localStorage.removeItem("cart");
      dispatch({
        type: clearCartConstant.CLEAR_CART_SUCCESS,
      });
    } catch (err) {
      dispatch({ type: clearCartConstant.CLEAR_CART_FAILURE });
    }
  };
};

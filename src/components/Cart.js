import { NavLink } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import CartItems from "../containers/CartItems";
import { addToCart, clearCart, removeCartItem } from "../redux/actions";

const Cart = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [cartUpdating, setCartUpdating] = useState(false);

  const onQuantityIncrement = async (cid, qty) => {
    const { id, title, image, price } = cart.cartItems[cid];
    //push the quantity 1 to addToCart action
    await dispatch(addToCart({ id, title, image, price }, 1));
  };
  const onQuantityDecrement = async (cid, qty) => {
    const { id, title, image, price } = cart.cartItems[cid];
    //push the quantity -1 to addToCart action
    await dispatch(addToCart({ id, title, image, price }, -1));
  };

  const onRemoveCartItem = (id) => {
    dispatch(removeCartItem(id));
  };

  const clearCartItems = () => {
    dispatch(clearCart());
  };

  const getSubTotal = () => {
    return Object.keys(cart.cartItems).reduce((totalPrice, key) => {
      const { quantity, price } = cart.cartItems[key];
      const Subtotal = totalPrice + price * quantity;
      return Subtotal;
    }, 0);
  };

  const getTax = () => {
    return Object.keys(cart.cartItems).reduce((totalTax, key) => {
      const { quantity, price } = cart.cartItems[key];
      const tax = totalTax + price * quantity * 0.13;
      return tax;
    }, 0);
  };

  return (
    <div className="container">
      <section>
        <div>
          <div className="mt-4">
            <nav aria-label="breadcrumb" className="breadcrumbContainer">
              <ul>
                <li style={{ display: "flex" }}>
                  <NavLink to="/"> Home</NavLink>
                  <div style={{ marginLeft: 10, color: "grey" }}>
                    <i className="fa-solid fa-arrow-left "></i>
                  </div>
                </li>
                <li>
                  <span>Cart</span>
                </li>
              </ul>
            </nav>
          </div>
          <div style={{ position: "relative" }}>
            {cartUpdating && <div>Loading</div>}
            <div
              style={{
                filter: cartUpdating && "blur(2px)",
              }}
            >
              <div
                className="m-2 pb-4"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <h3 className="">Cart</h3>
                <h6
                  className="mt-2"
                  style={{ opacity: "80%", cursor: "pointer" }}
                  onClick={clearCartItems}
                >
                  Clear Cart
                </h6>
              </div>

              {Object.keys(cart.cartItems).length > 0 ? (
                <div>
                  {Object.keys(cart.cartItems).map((key, index) => (
                    <CartItems
                      key={index}
                      cartItem={cart.cartItems[key]}
                      onQuantityDecrementS={onQuantityDecrement}
                      onQuantityIncrementS={onQuantityIncrement}
                      onRemoveCartItemS={onRemoveCartItem}
                    />
                  ))}
                </div>
              ) : (
                <div
                  style={{
                    textAlign: "center",
                    color: "#424949",
                    fontWeight: 500,
                    marginBottom: 90,
                  }}
                >
                  {" "}
                  You have empty cart. Please go back to{" "}
                  <NavLink href="/">shop page</NavLink>{" "}
                </div>
              )}

              <div className="row ">
                <div className="col-md-7 col-4"></div>
                <div className="col-md-5 col-8 ">
                  <div style={{ background: "#EBEDEF " }} className="p-3">
                    <div>
                      <div className="cartTotalContainer">
                        <div>Subtotal</div>
                        <div>
                          <strong>${getSubTotal().toFixed(2)}</strong>
                        </div>
                      </div>
                      <div className="cartTotalContainer">
                        <div>Tax</div>
                        <div>
                          <div>
                            <strong>${getTax().toFixed(2)}</strong>
                          </div>
                        </div>
                      </div>

                      <div className="cartTotalContainer">
                        <div>Total</div>
                        <div style={{ color: "#990011" }}>
                          {" "}
                          <strong>
                            ${(getSubTotal() + getTax()).toFixed(2)}
                          </strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Cart;

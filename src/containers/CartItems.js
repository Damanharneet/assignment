const CartItems = ({
  cartItem,
  onQuantityIncrementS,
  onQuantityDecrementS,
  onRemoveCartItemS,
}) => {
  return (
    <div>
      <div className="cart-sidebar-body">
        <div className="col-12 m-auto">
          <div>
            <div className="cartItemContainer mb-3">
              <div className="cartItemDetailContainer">
                <div className="imageContainerCart">
                  <div className="w-100 mt-1">
                    <img
                      src={cartItem.image}
                      className="cartImage"
                      height="70"
                      width="70"
                    />
                  </div>
                </div>
                <div className="cartDetailContainerCart">
                  <div className="cartNameContiner w-100">
                    <p className="cartItemName">{cartItem.title}</p>
                    <div className="cartPriceAndQuantity">
                      <p className="cartSinglePrice">${cartItem.price}</p>
                      <div className="quantityControl">
                        <button
                          onClick={() => {
                            if (cartItem.quantity <= 1) {
                            } else {
                              onQuantityDecrementS(cartItem.id);
                            }
                          }}
                        >
                          -
                        </button>
                        <div>
                          <input
                            type="text"
                            min={1}
                            value={
                              cartItem.quantity > 1 ? cartItem.quantity : 1
                            }
                            placeholder="Qty"
                            style={{
                              width: 65,
                              textAlign: "center",
                              borderRadius: "5px",
                              borderColor: "#990011",
                              marginLeft: "5px",
                              marginRight: "5px",
                            }}
                            
                          />
                        </div>
                        <button
                          onClick={() => onQuantityIncrementS(cartItem.id)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cartPriceContainerCart">
                  <div
                    style={{
                      height: "20%",
                      top: 0,
                      textAlign: "right",
                      fontSize: 12,
                      cursor: "pointer",
                      color: "red",
                      fontWeight: 700,
                    }}
                  >
                    <span onClick={() => onRemoveCartItemS(cartItem.id)}>
                      Remove
                    </span>
                  </div>
                  <div
                    className="totalPrice"
                    style={{ textAlign: "right", width: "100%" }}
                  >
                    <p className="totalpriceValue">
                      ${(cartItem.price * cartItem.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;

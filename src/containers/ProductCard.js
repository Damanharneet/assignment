import Rating from "react-rating";
import { Col } from "react-bootstrap";
import Stars from "./Star";
import { addToCart } from "../redux/actions";
import { useDispatch } from "react-redux";

const ProductCard = ({ pro }) => {
  const dispatch = useDispatch();
  return (
    <div className="col-lg-3 col-md-4 col-6" style={{ display: "flex" }}>
      <div className="productCard" style={{ width: "100%" }}>
        <div className="product-top-area">
          <div className="product-img">
            <img
              src={pro.image}
              alt="product"
              onerror="this.src='https://i.ibb.co/qpB9ZCZ/placeholder.png'"
            />
          </div>
        </div>
        <div className="productInfo">
          <h6 className="product-category">{pro.category}</h6>
          <h6 className="product-title">{pro.title}</h6>
          <div className="d-flex align-items-center">
            <Stars rate={pro.rating.rate} count={pro.rating.count} />
          </div>
          <div
            className="d-flex flex-wrap align-items-center py-2 mt-2"
            style={{ justifyContent: "space-between" }}
          >
            <div className="product-price">${pro.price}</div>
            <div className="cartButton">
              <button
                className="addToCartButton"
                onClick={() => {
                  const { id, title, price, image } = pro;
                  dispatch(addToCart({ id, title, price, image }));
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;

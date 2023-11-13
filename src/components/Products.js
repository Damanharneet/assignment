import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/actions";
import ProductCard from "../containers/ProductCard";
import { Container, Row } from "react-bootstrap";
import Pagination from "../containers/Pagination";
import ReactLoading from "react-loading";
import { addToCart } from "../redux/actions";
const Products = (props) => {
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.products.products);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);
  const [totalProduct, setTotalProduct] = useState();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  useEffect(() => {
    if (productsState) {
      setProducts(productsState);
      setTotalProduct(productsState.length);
    }
  }, [productsState]);

  //option for showing the limit of products
  const optionsArray = Array.from(
    { length: products.length / 4 },
    (_, index) => (index + 1) * 4
  );

  return (
    <section>
      <div class="container">
        <div class="row g-4 py-5">
          {products.length > 0 ? (
            products
              .slice(page * limit - limit, page * limit)
              .map((pro) => <ProductCard pro={pro} />)
          ) : (
            <div
              style={{
                position: "fixed",
                left: "50%",
                top: "35%",

                height: 90,
                width: 90,
              }}
            >
              <ReactLoading
                type={"bars"}
                color={"#cc8a21"}
                height={50}
                width={50}
              />
            </div>
          )}
        </div>
      </div>

      {products && products.length !== 0 && (
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "20px",
          }}
        >
          <Pagination
            style={{ marginTop: 20, fontSize: 16 }}
            totalProduct={Math.ceil(products.length)}
            limit={limit}
            currentPage={page}
            page={page}
            setPage={setPage}
          />
          <select
            style={{ width: "80px", marginTop: "-15px" }}
            value={limit}
            onChange={(e) => {
              setPage(1);
              setLimit(e.target.value);
            }}
          >
            {optionsArray.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      )}
    </section>
  );
};

export default Products;

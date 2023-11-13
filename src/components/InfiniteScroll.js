import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductFromServer } from "../redux/actions";
import ReactLoading from "react-loading";
import ProductCard from "../containers/ProductCard";

const InfiniteScroll = () => {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(8);
  const [products, setProducts] = useState([]);
  const [getProduct, setGetProduct] = useState(false);
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.products.products);
  useEffect(() => {
    dispatch(getProductFromServer(page, count)).then((data) => {
      console.log("action");
      setProducts((prev) => [...prev, ...data.payload]);
    });
  }, [page]);
  {
    /*}
    useEffect(() =>{
   if(page <=1){
    dispatch(getProductFromServer(page,count)).then((data) => {
        console.log("action")
        setProducts((prev) => [...prev, ...data.payload])
    })
   
   }
    },[page]) */
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScrolling);
    return () => window.removeEventListener("scroll", handleScrolling);
  }, []);

  const handleScrolling = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        // const totalPages = Math.round(totalProduct/count)
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <section>
        <div class="container">
          <div class="row g-4 py-5">
            {products.length > 0 ? (
              products.map((pro) => <ProductCard pro={pro} />)
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
          ></div>
        )}
      </section>
    </div>
  );
};

export default InfiniteScroll;

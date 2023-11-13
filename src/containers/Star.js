const Stars = ({ count, rate }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    console.log(count, rate);
    let number = index + 0.5;
    return (
      <span key={index} style={{ color: "#fdcc0d" }}>
        {rate >= index + 1 ? (
          <i className="fa-solid fa-star"></i>
        ) : rate >= number ? (
          <i className="fa-solid fa-star-half-stroke"></i>
        ) : (
          <i className="fa-regular fa-star"></i>
        )}{" "}
      </span>
    );
  });
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {ratingStar}
      <p
        style={{
          fontSize: 12,
          textAlign: "center",
          margin: "auto",
          marginTop: 3,
          marginLeft: 5,
          opacity: "70%",
        }}
      >
        ({count} customer reviews)
      </p>
    </div>
  );
};

export default Stars;

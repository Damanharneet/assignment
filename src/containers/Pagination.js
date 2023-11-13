export default function Pagination({
  totalProduct,
  limit,
  currentPage,
  setPage,
}) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalProduct / limit); i++) {
    pages.push(i);
  }
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination" style={{ float: "right" }}>
          <li className="page-item">
            <a
              onClick={() => {
                currentPage < 1 ? setPage(currentPage - 1) : setPage(1);
              }}
              className="page-link"
              href="#"
              aria-label="Previous"
              style={{ color: "#424949", fontWeight: 700 }}
            >
              <span aria-hidden="true">&laquo;</span>
              <span
                className="sr-only"
                style={{ color: "#424949", fontWeight: 700 }}
              ></span>
            </a>
          </li>
          {pages.map((page, index) => (
            <li className="page-item" key={index}>
              <a
                className="page-link"
                href="#"
                style={
                  currentPage === page
                    ? {
                        color: "#cc8a21",
                        fontWeight: 700,
                      }
                    : {
                        color: "#424949",
                        fontWeight: 700,
                      }
                }
                onClick={() => setPage(index + 1)}
              >
                {page}
              </a>
            </li>
          ))}

          <li className="page-item">
            <a
              onClick={() => {
                currentPage >= currentPage.length
                  ? setPage(currentPage + 1)
                  : setPage(pages.length);
              }}
              className="page-link"
              href="#"
              aria-label="Next"
              style={{ color: "#424949", fontWeight: 600 }}
            >
              <span aria-hidden="true">&raquo;</span>
              <span className="sr-only"></span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

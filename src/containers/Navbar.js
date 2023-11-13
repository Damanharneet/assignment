import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useState } from "react";
import { useSelector } from "react-redux";
const Navbar = (props) => {
  const cart = useSelector((state) => state.cart);
  const [showNavBar, setShowNavBar] = useState(false);
  const handleShowNavbar = () => {
    setShowNavBar(!showNavBar);
  };

  const [searchBarStretch, setSearchBarStretch] = useState(false);
  const showSearchbar = () => {
    setSearchBarStretch(!searchBarStretch);
  };
  
  const handleNavbar = () => {
    if (showNavBar) {
      setShowNavBar(!showNavBar);
    }
  };
  return (
    <>
      <nav
        className={`navbar ${showNavBar && "activeNav"}`}
        onClick={handleNavbar}
      >
        <div className="menuOverlay" />
        <div className="containerNavbar">
          <div className="logoContainer">
            <NavLink to="/">
              <img src={Logo} className="logo" />
            </NavLink>
          </div>
          <div className="menuCartIconContainer">
            <div className="menu-icon" onClick={handleShowNavbar}>
              {showNavBar ? (
                <i class="fa-solid fa-xmark " style={{ color: "#990011" }}></i>
              ) : (
                <i class="fa-solid fa-bars" style={{ color: "#990011" }}></i>
              )}
            </div>
            <div className="menuContainer">
              <div className={`nav-elements ${showNavBar && "active"}`}>
                <ul>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Categories</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Shop</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Contact</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className={`search-box ${searchBarStretch && "active"}`}>
                <input
                  className="search-text"
                  type="text"
                  placeholder="Search Anything"
                />
                {searchBarStretch ? (
                  <button className="searchButton">Search</button>
                ) : null}
                <a href="#" className="search-btn" onClick={showSearchbar}>
                  {searchBarStretch ? (
                    <i class="fa-solid fa-xmark"></i>
                  ) : (
                    <i className="fas fa-search"></i>
                  )}
                </a>
              </div>
              <div className="search-box">
                <NavLink to="/cart">
                  <i
                    className="fa-solid fa-cart-shopping ml-2"
                    style={{ color: "black" }}
                  ></i>
                </NavLink>
                <span className="cartNumber">
                  {cart.cartItems &&
                    Object.keys(cart.cartItems).reduce(function (qty, key) {
                      return qty + cart.cartItems[key].quantity;
                    }, 0)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;

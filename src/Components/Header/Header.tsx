import { Link,  } from "react-router-dom";
import "./Header.scss"; // Import CSS file

import "font-awesome/css/font-awesome.min.css";

const Header = () => {
  
  return (
    <header>
      <div className="header__container">
        <div className="header__logo">
          <img
            src="https://preview.colorlib.com/theme/cake/img/logo.png.webp"
            alt=""
            className="header_img"
          />
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="/">Home</a>
            </li>
            <li className="header__nav-item">
              <a href="#!">About</a>
            </li>
            <li className="header__nav-item">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="header__nav-item">
              <a href="#!">Blog</a>
            </li>
            <li className="header__nav-item">
              <a href="#!">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="header__user">
          <ul className="header__user-list">
            <li className="header__user-item">
              <Link to="/signin">Sign In</Link>
            </li>

            <li className="header__user-item">
              <Link to="/signup">Sign Up</Link>
            </li>

            <li className="header__user-item">
              <Link to="/cart">
                <i className="fa fa-shopping-cart"></i>
                Cart
                <span className="totalQuantity"></span>
              </Link>
            </li>

            <li className="header__user-item-user">
              <img
                src="https://cdn-icons-png.flaticon.com/128/6997/6997662.png"
                alt="user"
                className="header__user-item-img"
              />
              <div className="header__user-popup">
                <Link to="/user">
                  <p className="header__user-popup-title">Thông tin User</p>
                </Link>
                <button>Đăng xuất</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

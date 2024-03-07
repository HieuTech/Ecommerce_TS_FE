import { Link } from "react-router-dom";
import "./Header.scss"; // Import CSS file
import "font-awesome/css/font-awesome.min.css";
import { useEffect, useState } from "react";

import { User } from "../../apis/user.api";
import { useDispatch, useSelector } from "react-redux";
import { StoreType } from "../../Stores";
import apis from "../../apis";
import { UserDataAction } from "../../Stores/Slice/UserData.slice";

const Header = () => {
  const [user, setUser] = useState<User | null>(null);
  const userData = useSelector((store: StoreType) => store.userReducer)
  const userEmail = userData.data?.data
  const dispatch = useDispatch()
  // console.log("userData", userData.data);
  
  const handleLogOut = () => {
    localStorage.removeItem("user_token");
    window.location.href = "/";
  };

  
  useEffect(() => {

    const fetchUserEmail = async () => {
      try {
        const res = await apis.userApi.getUserByEmail(userEmail.email);
        // console.log("res",res.data[0]);
        setUser(res.data[0]);
        dispatch(UserDataAction.setData(res.data[0]));
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchUserEmail();
  }, [user?.cart.length]);

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
            {user ? (
              <div className="header_group">
                <li className="header__user-item">
                  <Link to="/cart">
                    <i className="fa fa-shopping-cart"></i>
                    Cart
                    
                      <span className="totalQuantity">{user.cart.length}</span>
                    
                  </Link>
                </li>

                <li className="header__user-item-user">
                  <div className="header-icon">
                    <img
                      src={user.avatar}
                      alt="user"
                      className="header__user-item-img"
                    />
                    <span className="header_user_name">{user.userName}</span>
                  </div>
                  <div className="header__user-popup">
                    <Link to="/user-info">
                      <p className="header__user-popup-title">Thông tin User</p>
                    </Link>
                    <button
                      onClick={() => {
                        handleLogOut();
                      }}
                    >
                      Đăng xuất
                    </button>
                  </div>
                </li>
              </div>
            ) : (
              <div className="header_group">
                <li className="header__user-item">
                  <Link to="/signin">Sign In</Link>
                </li>
                <li className="header__user-item">
                  <Link to="/signup">Sign Up</Link>
                </li>
              </div>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

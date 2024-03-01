import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "./Footer.scss";
const Footer = () => {
  return (
    <footer>
      {/* Google Maps */}
      <div className="google-map">
        {/* Đặt mã nhúng của Google Maps ở đây */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15676.561971655496!2d106.63991191762591!3d10.800549930302944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175296b1af354b9%3A0x706c1d25db148bf!2zNzcgTMOqIFRydW5nIE5naMSpYSwgUGjGsOG7nW5nIDEyLCBUw6JuIELDrG5oLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1702259301741!5m2!1svi!2s"
          width="600"
          height="450"
          
          loading="lazy"
          title="Google Maps"
        ></iframe>
      </div>

      {/* Email Form */}
      <div className="email-form">
        <h2>Đăng ký để nhận tin tức</h2>
        <form>
          <input type="email" placeholder="Nhập địa chỉ email của bạn" />
          <button type="submit">Sign In</button>
        </form>
      </div>

      {/* Social Media Links */}
      <div className="social-media-links">
        <h2>Kết nối với chúng tôi</h2>
        <ul>
          <li>
            <a
              href="https://www.facebook.com/your-page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/your-page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>

      {/* Copyright */}
      <div className="copyright">
        &copy; 2023 Tên Công Ty. Tất cả quyền được bảo lưu.
      </div>
    </footer>
  );
};

export default Footer;

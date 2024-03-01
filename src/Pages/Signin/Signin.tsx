import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Signin.scss"; // Import file CSS

const SignIn = () => {
  const handleSignIn = () => {};

  return (
    <div className="signin-container">
      <h2>Đăng nhập</h2>
      <form onSubmit={handleSignIn}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mật khẩu:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit" className="btn-signin">
          Đăng nhập
        </button>
      </form>
      <Link to="/signup">You have no account -- Sign Up Now</Link>
    </div>
  );
};

export default SignIn;

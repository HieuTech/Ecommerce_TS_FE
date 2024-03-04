import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as jose from "jose";

import "./Signin.scss"; // Import file CSS
import apis from "../../apis";
const SignIn = () => {
  let data = {
    id: 1,
    name: "Phuoc",
    age: 30,
  };

  generateToken(data)
  .then(res => {
    console.log("res", res)
  })


  async function generateToken(data: any) {
    const jwt = await new jose.SignJWT(data)
      .setProtectedHeader({ alg: "HS256" })
      .sign(new TextEncoder().encode("ntbphuoc"));
    return jwt;
  }

  async function verifyToken(token: string, key: string) {
    try {
      const { payload } = await jose.jwtVerify(
        token,
        new TextEncoder().encode(key)
      );
      return payload;
    } catch (error) {
      return null;
    }
  }

  verifyToken(
    "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IlBodW9jIiwiYWdlIjozMH0.nfViOTwfUsi-F4T5_mRHX9LARdSO1UM_lJbllaVsthc",
    "ntbphuoc"
  ).then((payload) => {
    console.log("payload", payload);
  });

  const handleSignIn = () => {};

  function validateEmail(email: string, password: string) {
    // Regular expression pattern for validating email addresses

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const checkValid = regex.test(email);

    if (!checkValid || password.length < 6) {
      alert("Invalid Email or Password");
      return;
    }
  }

  useEffect(() => {
    const getAllUser = async () => {
      const res = await apis.userApi.getUser();
      console.log("res", res.data);
      setUserList(res.data);
    };
    getAllUser();
  }, []);

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

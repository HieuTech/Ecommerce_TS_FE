import React, { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.scss"; // Import SCSS module
import apis from "../../apis";
import { UserStatus } from "../../apis/user.api";
import "font-awesome/css/font-awesome.min.css";
import { message } from "antd";

import { User } from "../../apis/user.api";

export default function SignUp() {
  const [userList, setUserList] = useState<User[]>([]);
  const navigate = useNavigate();

  //---SignUp---
  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = (e.target as HTMLFormElement).email.value;
    const password = (e.target as HTMLFormElement).password.value;

    const addUser = {
      userName: "string",
      email,
      password,
      created_at: new Date(),
      cart: [],
      avatar:
        "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=826&t=st=1709345993~exp=1709346593~hmac=c6fe731b31129b5ae03a36392c3cecce046a77b9acfaffd7875af3c82a3f69ee",
      status: UserStatus.ACTIVE,
      receipt_id: "",
    };

    const res = await apis.userApi.userSignUp(addUser);
    if (res?.status !== 200) {
      message.error(res?.message);
      return;
    }

    message.success("Sign Up Successfully!");
    setTimeout(() => {
      window.location.href = "/signin";
    }, 1000);

    // Execute the following code only if the condition is true
  };

  useEffect(() => {
    const getAllUser = async () => {
      const res = await apis.userApi.getUser();

      setUserList(res.data);
    };
    getAllUser();
  }, []);

  return (
    <div className="signUp-container">
      <div className="screen">
        <div className="screen__content">
          <form className="login" onSubmit={handleSignUp}>
            <div className="login__field">
              <i className="login__icon fas fa-user" />
              <input
                type="text"
                className="login__input"
                placeholder="Email"
                name="email"
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock" />
              <input
                type="password"
                className="login__input"
                placeholder="Password"
                name="password"
              />
            </div>
            <button className="button login__submit " type="submit">
              <span className="button__text">Log In Now</span>
              <i className="button__icon fas fa-chevron-right" />
            </button>
          </form>
          <div className="social-login">
            <h3>log in via</h3>
            <div className="social-icons">
              <i className="fa fa-google"></i>
            </div>
          </div>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4" />
          <span className="screen__background__shape screen__background__shape3" />
          <span className="screen__background__shape screen__background__shape2" />
          <span className="screen__background__shape screen__background__shape1" />
        </div>
      </div>
    </div>
  );
}

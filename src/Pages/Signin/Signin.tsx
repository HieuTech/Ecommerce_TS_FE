import React, { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Signin.scss"; // Import file CSS
import apis from "../../apis";
import { message } from "antd";

interface CheckUserLogin {
  email: string;
  password: string;
}

const SignIn = () => {


  const [userList, setUserList] = useState<CheckUserLogin[]>([]);
 
  const handleSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.target as HTMLFormElement).email.value;
    const password = (e.target as HTMLFormElement).password.value;
    const checkAccount = userList.find(
      (user: CheckUserLogin) => user.email == email
    );

    if (
      checkAccount &&
      (checkAccount.email !== email || checkAccount.password !== password)
    ) {
      alert("Invalid User");
      return;
    }
    console.log("checkAccount", checkAccount);
    
    const signInUser = {
      id: checkAccount?.id,
      email,
      password,
    };

    await apis.userApi.userLogin(signInUser).then((res) => {
      if (res.status !== 200) {
        message.error(res.message);
      }

      if (res.data !== undefined) {
        message.success(res.message);
        localStorage.setItem("user_token", res.data);
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      }
    });
  };

  useEffect(() => {
    const getAllUser = async () => {
      const res = await apis.userApi.getUser();
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

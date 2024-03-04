import React, { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";
import "./Signin.scss"; // Import file CSS
import apis from "../../apis";
import utils from "../../utils";
interface CheckUserLogin {
  email: string;
  password: string;
}

const SignIn = () => {
  const [userList, setUserList] = useState<CheckUserLogin[]>([]);
  const navigate = useNavigate();

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

    const userLogin = {
      email,
      password,
    };
    try {
      const token = await utils.jwt.generateToken(userLogin);
      //  console.log("generated jwt", jwt);
      localStorage.setItem("token", JSON.stringify(token));
      setTimeout(() => {
        message.success("Login successful!");
        navigate("/");
        utils.jwt.verifyToken(token).then((payload: any) => {
          console.log("payload", payload);
        });
      }, 1000);
    } catch (error) {
      console.error("Error generating token:", error);
    }
  };

  message.success("Operation successful!");

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

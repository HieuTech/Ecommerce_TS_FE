import React, { FormEvent } from "react";
import "./AdminLogin.scss";
import { message } from "antd";
import apis from "../../../../apis";
export default function Admin() {
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const email = (e.target as HTMLFormElement).email.value;
    const password = (e.target as HTMLFormElement).password.value;

    if (!email || !password) {
      message.error("email or password is empty");
    }

    const adminEntity = {
      email,
      password,
    };

    await apis.adminApi.login(adminEntity).then((res) => {
      if (res.status !== 200) {
        console.log("res.message", res.message);
        message.error(res.message);
      }
      if (res.data !== undefined) {
        message.success(res.message);
        localStorage.setItem("admin_token", res.data);
        setTimeout(()=>{
          window.location.href = "/admin"
        },1000)
      }else{
        console.log("response data is undefined");
      }
    });
  };

  return (
    <div className="admin">
      <section className="sign-in">
        {" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span />
        <div className="signin">
          <div className="content">
            <h2>Sign In</h2>
            <form className="form" onSubmit={handleSubmit}>
              <div className="inputBox">
                <label htmlFor="">Email</label>
                <input type="text" name="email" />
              </div>
              <div className="inputBox">
                <label htmlFor="">Password</label>
                <input type="password" name="password" />
              </div>
              <div className="links"> </div>
              <div className="inputBox">
                <button type="submit" className="btn btn-submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>{" "}
    </div>
  );
}

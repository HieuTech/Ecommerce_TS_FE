import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Signup.module.scss"; // Import SCSS module
import apis from "../../apis";
import { UserStatus } from "../../apis/user.api";




interface checkUser {
  email: string;
}

export default function SignUp() {
  const [userList, setUserList] = useState([]);
  const navigate = useNavigate()

  //---SignUp---
  const handleSignUp = (e: any) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(e.target.password.value);

    const checkUser = userList.find((user: checkUser) => user.email == email);

    if (checkUser) {
      alert("User Exist!!");
      return;
    }

    validateEmail(email, password);

    postUser(email, password);
  };

  //AddUser
  const postUser = async (email: string, password: string) => {
    const addUser = {
      userName: "string",
      email,
      password,
      created_at: new Date(),
      cart: [] ,
      avatar:
        "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=826&t=st=1709345993~exp=1709346593~hmac=c6fe731b31129b5ae03a36392c3cecce046a77b9acfaffd7875af3c82a3f69ee",
      status: UserStatus.ACTIVE,
      receipt_id: "",
    };

    try {
        const res = await apis.userApi.postUser(addUser)
        console.log("res",res.data);
        setTimeout(()=>{
          alert("Sign Up Successfully")
          navigate("/signin");
        },1000)

    } catch (error) {
      console.log("error", error);
      
    }

  };

  //check valid
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
    <div className={styles["sign-up-container"]}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div className={styles["form-group"]}>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            className={styles["form-control"]}
            // You can also define styles directly here if needed
          />
        </div>
        <div className={styles["form-group"]}>
          <label>Password:</label>
          <input
            type="text"
            name="password"
            className={styles["form-control"]}
            placeholder="At Least 6 Character"
            // You can also define styles directly here if needed
          />
        </div>
        <button type="submit" className={styles["submit-button"]}>
          Sign Up
        </button>
      </form>
      <Link to="/signin" className={styles["sign-in-link"]}>
        Already have an account? Sign In
      </Link>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import styles from "./Signup.module.scss"; // Import SCSS module

export default function SignUp() {
  const handleSignUp = (event) => {
    event.preventDefault();
    // Your sign-up logic here
  };

  return (
    <div className={styles["sign-up-container"]}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div className={styles["form-group"]}>
          <label>Email:</label>
          <input
            type="text"
            className={styles["form-control"]}
            // You can also define styles directly here if needed
          />
        </div>
        <div className={styles["form-group"]}>
          <label>Password:</label>
          <input
            type="text"
            className={styles["form-control"]}
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

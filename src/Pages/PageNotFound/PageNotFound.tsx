import React from "react";
import styles from "./PageNotFound.module.scss"; // Import file CSS

const PageNotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>Page Not Found!</p>
      <a href="/" className={styles.link}>
        Go back to Home
      </a>
    </div>
  );
};

export default PageNotFound;

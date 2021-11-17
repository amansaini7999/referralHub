import React from "react";
import styles from "./style/style.module.css";

const Button = ({ label, handleClick }) => (
  <button className={styles.buttonStyle} onClick={handleClick}>
    {label}
  </button>
);

export default Button;

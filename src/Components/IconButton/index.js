import React from "react";
import styles from "./styles/style.module.css";

/*
 * It uses an image to display as an icon.
 * alt is optional, but it is recommended for better S.E.O and Accessibility Standards
 */
const IconButton = ({ icon, onClick, alt }) => {
  return (
    <div className="d-flex flex-row-reverse">
    <button className={styles.iconButton} onClick={onClick}>
      <img src={icon} alt={alt ? alt : "Icon Button"}></img>
    </button>
    </div>
  );
};

export default IconButton;

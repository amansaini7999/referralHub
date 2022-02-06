import React from "react";
import { Row, Card } from "react-bootstrap";
import styles from "./style/style.module.css";
import JobComp from "./job";

// const func = () => {
//   console.log("button click");
// };

const Cards = (props) => {
  let container = null;
  //let Button = null;
  switch (props.cont) {
    case "CreateJob":
      // eslint-disable-next-line no-lone-blocks
      {
        container = <JobComp />;
        //Button = <Button label="CREATE" handleClick={func} />;
      }
      break;
    default:
      break;
  }

  return (
    <div className={styles.card}>
      {/* <CloseButton className={styles.close} /> */}
      <div className={styles.headings}>{props.heading}</div>
      <div className={styles.desc}>{props.desc}</div>
      <div className={styles.line}></div>
      <div className={styles.cont}>{container}</div>
    </div>
  );
};

export default Cards;

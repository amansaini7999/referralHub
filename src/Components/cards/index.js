import React from "react";
import { Row, Card, CloseButton } from "react-bootstrap";
import styles from "./style/style.module.css";
import JobComp from "./job";
import Button from "./button";

const func = () => {
  console.log("button click");
};

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
    <Card className={styles.card}>
      <CloseButton className={styles.close} />
      <Row className={styles.headings}>{props.heading}</Row>
      <Row className={styles.desc}>{props.desc}</Row>
      <Row className={styles.line}></Row>
      <Row className={styles.cont}>{container}</Row>
      <Row>
        <Button label="CREATE" handleClick={func} />
      </Row>
    </Card>
  );
};

export default Cards;

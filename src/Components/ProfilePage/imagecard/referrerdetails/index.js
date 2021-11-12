import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from "./style/style.module.css";

const RefereerInfo = (props) => {
  return (
    <Col className={styles.carddetails}>
      <Row className={styles.name}>{props.name}</Row>

      <Row>{props.infotext}</Row>
    </Col>
  );
};

export default RefereerInfo;

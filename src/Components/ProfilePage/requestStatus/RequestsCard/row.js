import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from "./style/style.module.css";

const Rows = ({ obj }) => {
  return (
    <Row className={styles.rw}>
      <Col>{obj.name}</Col>
      <Col>{obj.jobid}</Col>
      <Col>{obj.joblink}</Col>
      <Col>{obj.status}</Col>
    </Row>
  );
};

export default Rows;

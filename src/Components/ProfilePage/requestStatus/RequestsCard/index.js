import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from "./style/style.module.css";
import Rows from "./row";

const Info = ({ isApplied, detailsarr }) => {
  let title;
  let firstcol;

  if (isApplied) {
    title = "APPLIED REQUESTS";
    firstcol = "COMPANY";
  } else {
    title = "REFERRAL REQUESTS";
    firstcol = "NAME";
  }

  return (
    <div>
      <div className={styles.title}>{title}</div>
      <Row className={styles.headings}>
        <Col>{firstcol}</Col>
        <Col>JOB ID</Col>
        <Col>JOB LINK</Col>
        <Col>STATUS</Col>
      </Row>
      <hr className={styles.hr}></hr>
      <div>
        {detailsarr.map((obj) => (
          <div key={obj.id}>
            <Rows obj={obj} />
            <hr className={styles.hr}></hr>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Info;

import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from "./style/style.module.css";
import Rows from "./row";

const Info = ({ cur_comp,token, isApplied, detailsarr,userId,id }) => {
  let title;
  let firstcol;
  let thirdcol;
  let forthcol;

  if (isApplied) {
    title = "APPLIED REQUESTS";
    firstcol = "COMPANY";
    thirdcol = "GIVEN BY";
    forthcol = "STATUS";
  } else {
    title = "JOB POSTED";
    firstcol = "COMPANY";
    thirdcol = "REFERRAL REQUESTS";
    forthcol = "ACTIVE"
  }

  return (
    <div>
      <div className={styles.title}>{title}</div>
      <Row className={styles.headings}>
        <Col>{firstcol}</Col>
        <Col>JOB ID</Col>
        <Col>{thirdcol}</Col>
        <Col>{forthcol}</Col>
      </Row>
      <hr className={styles.hr}></hr>
      <div>
        {detailsarr.map((obj) => (
          <div key={obj.id}>
            <Rows cur_comp={cur_comp} token={token} obj={obj} userId ={userId} id={id} isApplied={isApplied}/>
            <hr className={styles.hr}></hr>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Info;

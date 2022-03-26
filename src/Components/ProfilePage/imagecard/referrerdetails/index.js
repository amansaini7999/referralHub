import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from "./style/style.module.css";
import {  FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const RefereerInfo = (props) => {
  return (
    <Row>
      <Col className={styles.carddetails}>
        <Row className={styles.name}>{props.name}</Row>

        <Row className={styles.rw}>{props.infotext}</Row>
        <Row className={styles.rw}>Email - {props.email}</Row>
      </Col>
      <Col className={styles.rightcol}>
        <Row className={styles.rwc}>{props.current_company}</Row>
        <Row className={styles.rwc}>
          <Col>
            <a rel="noreferrer" href={props.leetcodelink} target="_blank">
              <SiLeetcode className="icons" />
            </a>
          </Col>
          <Col>
            <a rel="noreferrer" href={props.linkedinlink} target="_blank">
              <FaLinkedin className="icons" />
            </a>
          </Col>
          <Col>
            <a rel="noreferrer" href={props.githublink} target="_blank">
              <FaGithub className="icons" />
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default RefereerInfo;

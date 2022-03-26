import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from "./style/style.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiCodechef,SiCodeforces } from "react-icons/si";

const RefereeInfo = (props) => {
  const resume = props.resume;
  // console.log(resume);
  return (
    <Row>
      <Col className={styles.carddetails}>
        <Row className={styles.name}>{props.name}</Row>

        <Row className={styles.rw}>{props.infotext}</Row>
        {props.year?<Row className={styles.rw}>
          Graduation year-
          {props.year}
        </Row>:null}
        <Row className={styles.rw}>Email- 
        {props.email}
        </Row>

        <button
          className={styles.button}
          onClick={() => window.open(resume, "_blank")}
        >
          RESUME
        </button>
      </Col>
      <Col className={styles.rightcol}>
        <Row className={styles.rwc}>{props.college}</Row>
        <Row className={styles.rwc}>
          <Col className={styles.cl}>
            <a rel="noreferrer" href={props.githublink} target="_blank">
              <FaGithub className="icons" />
            </a>
          </Col>
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
            <a rel="noreferrer" href={props.codeforcesLink} target="_blank">
              <SiCodeforces className="icons" />
            </a>
          </Col>
          <Col>
            <a rel="noreferrer" href={props.codechefLink} target="_blank">
              <SiCodechef className="icons" />
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default RefereeInfo;

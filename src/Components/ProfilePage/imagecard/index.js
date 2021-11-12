import React from "react";
import { Card, Row } from "react-bootstrap";
import styles from "./style/style.module.css";
import RefereeInfo from "./refreedetails";
import ReferrerInfo from "./referrerdetails";

const ProfileCard = ({ isReferee }) => {
  return (
    <Card className={styles.card}>
      <Row className={styles.backg}></Row>
      <Row className={styles.im}></Row>
      <Row className={styles.details}>
        {isReferee ? (
          <RefereeInfo
            year="2023"
            infotext="BTech CSE Student | Flutter Developer | UI/UX Designer"
            name="Astha Thakur"
            college="AMITY University"
            githublink="https://github.com"
            leetcodelink="https://leetcode.com"
            linkedinlink="https://www.linkedin.com/feed/"
            resume="https://docs.google.com/document/d/1dOaSpZAaRUMCR4P5OO1caAbppgPziZs9mQ-WHwZCz9k/edit?usp=sharing"
          />
        ) : (
          <ReferrerInfo infotext="SDE 2 Paytm" name="Astha Thakur" />
        )}
      </Row>
    </Card>
  );
};

export default ProfileCard;

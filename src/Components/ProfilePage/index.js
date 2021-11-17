import React from "react";
import { Row, Container } from "react-bootstrap";
import styles from "./style/style.module.css";
import ImageCard from "./imagecard";
import RequestStatus from "./requestStatus";

const arr = [
  {
    id: 1,
    name: "CISCO",
    jobid: "16890",
    joblink: "#",
    status: "referred",
  },
  {
    id: 2,
    name: "Amazon",
    jobid: "16C90",
    joblink: "#",
    status: "referred",
  },
  {
    id: 3,
    name: "Swiggy",
    jobid: "7246G7",
    joblink: "#",
    status: "referred",
  },
  {
    id: 4,
    name: "TCS",
    jobid: "69890",
    joblink: "#",
    status: "referred",
  },
  {
    id: 5,
    name: "Barclays",
    jobid: "U791Y7",
    joblink: "#",
    status: "referred",
  },
];

const arr1 = [
  {
    id: 1,
    name: "Animesh Bora",
    jobid: "16890",
    joblink: "#",
    status: "referred",
  },
  {
    id: 2,
    name: "Ruby Rajput",
    jobid: "16C90",
    joblink: "#",
    status: "referred",
  },
  {
    id: 3,
    name: "Shivam Patel",
    jobid: "7246G7",
    joblink: "#",
    status: "referred",
  },
  {
    id: 4,
    name: "Archi Mehta",
    jobid: "69890",
    joblink: "#",
    status: "referred",
  },
  {
    id: 5,
    name: "Rukmini Sanyal",
    jobid: "U791Y7",
    joblink: "#",
    status: "referred",
  },
];

const Profile = ({ isReferee }) => {
  return (
    <Container>
      <Row className={styles.rw}>
        <ImageCard isReferee={isReferee} />
      </Row>

      {isReferee ? (
        <Row className={styles.rw}>
          <RequestStatus detailsarr={arr} isApplied={true} />
        </Row>
      ) : (
        <Row className={styles.rw}>
          <RequestStatus detailsarr={arr} isApplied={true} />
          <RequestStatus detailsarr={arr1} isApplied={false} />
        </Row>
      )}
    </Container>
  );
};

export default Profile;

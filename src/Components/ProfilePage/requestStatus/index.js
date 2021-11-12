import React from "react";
import { Card } from "react-bootstrap";
import styles from "./style/style.module.css";
import RequestCards from "./RequestsCard";

const requestedProfiles = (props) => {
  return (
    <Card className={styles.card}>
      <RequestCards isApplied={props.isApplied} detailsarr={props.detailsarr} />
    </Card>
  );
};

export default requestedProfiles;

import React from "react";
import { Card } from "react-bootstrap";
import styles from "./style/style.module.css";
import RequestCards from "./RequestsCard";

const requestedProfiles = (props) => {
  return (
    <Card className={styles.card}>
      <RequestCards cur_comp={props.cur_comp} token={props.token} userId={props.userId} id={props.id} isApplied={props.isApplied} detailsarr={props.detailsarr} />
    </Card>
  );
};

export default requestedProfiles;

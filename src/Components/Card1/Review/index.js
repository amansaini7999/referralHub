import React from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import styles from './Styles/style.module.css'

const user={
    Name: "Rahul Jain",
    Email: "xyz@email.com",
    Phone: "65413974",
    Resume: "bily.com/xyz311"
}
const ReviewCard = (props) => {
    // console.log(props);
    const [feedback, setFeedback] =useState("");
    switch (props.type) {
        case "createreferralreq":
          {
            return <Card className={styles.mainCard}>
            <div className={styles.section}>
                <div><span style={{fontWeight: "300"}}>Company - </span>{props.company}</div>
                <div><span style={{fontWeight: "300"}}>Job ID - </span>{props.jobId}</div>
                <div><span style={{fontWeight: "300"}}>Job Link - </span><a target="_blank" href={props.jobLink} style={{textDecoration: "none",backgroundColor:"lightgreen"}}>Click Here</a></div>
            </div>
            <div className={styles.section}>
                <div><span style={{fontWeight: "300"}}>Name - </span>{user.Name}</div>
                <div><span style={{fontWeight: "300"}}>Email - </span>{user.Email}</div>
                <div><span style={{fontWeight: "300"}}>Phone - </span>{user.Phone}</div>
            </div>
            <div className={styles.section}>
                <span style={{fontWeight: "300"}}>Resume - </span><a target="_blank" href={user.Resume} style={{textDecoration: "none",backgroundColor:"lightgreen"}}>Click Here</a>
            </div>
            
            </Card>;
          }
        case "createjob":
          {
            return <Card className={styles.mainCard}>
            <div className={styles.section}>
                <div><span style={{fontWeight: "300"}}>Company - </span>{props.company}</div>
                <div><span style={{fontWeight: "300"}}>Job ID - </span>{props.jobId}</div>
                <div><span style={{fontWeight: "300"}}>Job Link - </span><a target="_blank" href={props.jobLink} style={{textDecoration: "none",backgroundColor:"lightgreen"}}>Click Here</a></div>
            </div>
            
            <div className={styles.desc}>{props.desc}</div>
            </Card>;
          }
        case "referralreq":
            {
                return <Card className={styles.mainCard}>
                <div className={styles.section}>
                    <div><span style={{fontWeight: "300"}}>Company - </span>{props.company}</div>
                    <div><span style={{fontWeight: "300"}}>Job ID - </span>{props.jobId}</div>
                    <div><span style={{fontWeight: "300"}}>Job Link - </span><a target="_blank" href={props.jobLink} style={{textDecoration: "none",backgroundColor:"lightgreen"}}>Click Here</a></div>
                </div>
                <div className={styles.section}>
                    <div><span style={{fontWeight: "300"}}>Name - </span>{user.Name}</div>
                    <div><span style={{fontWeight: "300"}}>Email - </span>{user.Email}</div>
                    <div><span style={{fontWeight: "300"}}>Phone - </span>{user.Phone}</div>
                </div>
                <div className={styles.section}>
                    <span style={{fontWeight: "300"}}>Resume - </span><a target="_blank" href={user.Resume} style={{textDecoration: "none",backgroundColor:"lightgreen"}}>Click Here</a>
                </div>
                
                </Card>;
            }
        case "feedback":
            {
                return <div className={styles.txtInput}>
                    <textarea value={props.feedback} onChange={(e)=>{props.setFeedback(e.target.value)}} className={styles.txtArea} placeholder={"Write your feedback...."} cols="50" rows="12"></textarea>
                </div>;
            }
        default:
          break;
  
      }
  
};

export default ReviewCard;

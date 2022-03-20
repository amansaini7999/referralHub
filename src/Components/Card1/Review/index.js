import React, { useEffect } from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import styles from './Styles/style.module.css'


const ReviewCard = (props) => {
    // console.log(props);
    // const [feedback, setFeedback] =useState("");
    const [user, setUser] = useState(props.user);
    useEffect(()=>{
        setUser(props.user);
    },[props.user]);
    // console.log(user);

    switch (props.type) {
        case "createreferralreq":
          {
            return <Card className={styles.mainCard}>
            <div className={styles.section}>
                <div><span style={{fontWeight: "300"}}>Company - </span>{props.company}</div>
                {props.jobId?<div><span style={{fontWeight: "300"}}>Job ID - </span>{props.jobId}</div>:null}
                {props.jobLink?<div><span style={{fontWeight: "300"}}>Job Link - </span><a target="_blank" href={props.jobLink} style={{textDecoration: "none",backgroundColor:"lightgreen"}}>Click Here</a></div>:null}
            </div>
            <div className={styles.section}>
                <div><span style={{fontWeight: "300"}}>Name - </span>{user.name}</div>
                <div><span style={{fontWeight: "300"}}>Email - </span>{user.email}</div>
                <div><span style={{fontWeight: "300"}}>Phone - </span>{user.phone_number}</div>
            </div>
            <div className={styles.section}>
                {user.resume_link?<><span style={{fontWeight: "300"}}>Resume - </span><a target="_blank" href={user.resume_link} style={{textDecoration: "none",backgroundColor:"lightgreen"}}>Click Here</a></>:null}
            </div>
            
            </Card>;
          }
        case "createjob":
          {
            return <Card className={styles.mainCard}>
            <div className={styles.section}>
                <div><span style={{fontWeight: "300"}}>Company - </span>{props.company}</div>
                {props.jobId?<div><span style={{fontWeight: "300"}}>Job ID - </span>{props.jobId}</div>:null}
                {props.jobLink?<div><span style={{fontWeight: "300"}}>Job Link - </span><a target="_blank" href={props.jobLink} style={{textDecoration: "none",backgroundColor:"lightgreen"}}>Click Here</a></div>:null}
            </div>
            
            <div className={styles.desc}>{props.desc}</div>
            </Card>;
          }
        case "referralreq":
            {
                // console.log(user.name);

                return <Card className={styles.mainCard}>
                <div className={styles.section}>
                    <div><span style={{fontWeight: "300"}}>Company - </span>{props.company}</div>
                    {props.jobId?<div><span style={{fontWeight: "300"}}>Job ID - </span>{props.jobId}</div>:null}
                    {props.jobLink?<div><span style={{fontWeight: "300"}}>Job Link - </span><a target="_blank" href={props.jobLink} style={{textDecoration: "none",backgroundColor:"lightgreen"}}>Click Here</a></div>:null}
                </div>
                <div className={styles.section}>
                    <div><span style={{fontWeight: "300"}}>Name - </span>{user.name}</div>
                    <div><span style={{fontWeight: "300"}}>Email - </span>{user.email}</div>
                    <div><span style={{fontWeight: "300"}}>Phone - </span>{user.phone_number}</div>
                </div>
                <div className={styles.section}>
                {user.resume_link?<><span style={{fontWeight: "300"}}>Resume - </span><a target="_blank" href={user.resume_link} style={{textDecoration: "none",backgroundColor:"lightgreen"}}>Click Here</a></>:null}
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

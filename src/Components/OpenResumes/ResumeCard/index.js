import React from 'react';
import ButtonStyle from '../../cards/EditProfile/styles/FormStyle/style.module.css'
import {Card, Row} from 'react-bootstrap';
import styles from './Styles/style.module.css';
import ReviewModal from '../../Card1/ReviewModal';

function fun()
{
    console.log(" button Clicked");
}
const ResumeCard = ({obj}) => {
  return <Card className={styles.resumeCard}>
        <div className={styles.cardSection}>
            <div>Company - {obj.Company}</div>
            <div>JOB ID - {obj.JobID}</div>
            <div>JOB Link - <a target="_blank" style={{textDecoration: "none",backgroundColor:"lightgreen"}} href={obj.JobLink}>Click Here</a></div>
        </div>
       <div className={styles.cardSection}>
           <div>Name - {obj.Name}</div> 
           <div>Email - {obj.Email}</div> 
           <div>Phone - {obj.Phone}</div> 
       </div>
       <div className={styles.cardSection}>
           <div>Resume - <a href={obj.Resume} target="_blank" style={{textDecoration: "none",backgroundColor:"lightgreen"}}>click here</a></div>
       </div>
      <div className="d-flex flex-row justify-content-between">
            <button className={ButtonStyle.submitButtonR} onClick={fun}>
                Reject
            </button>
                
            <button className={ButtonStyle.submitButton} onClick={fun}>
                Skip
            </button>

            <ReviewModal type={"feedback"} buttonLabel={"Feedback and Revert"} heading={"Feedback and Revert"} msg={"Kindly fill the feedback"}/>

            <button className={ButtonStyle.submitButtonG} onClick={fun}>
                Refer
            </button>
        </div>
  </Card>;
};

export default ResumeCard;

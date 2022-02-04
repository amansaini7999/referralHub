import React from 'react';
import ButtonStyle from '../../cards/EditProfile/styles/FormStyle/style.module.css'
import {Card, Row} from 'react-bootstrap';
import styles from './Styles/style.module.css';

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
            <button style={{maxWidth: "160px",backgroundColor: "#de0404",border: "red"}} className={ButtonStyle.submitButton} onClick={fun}>
                Reject
            </button>
                
            <button style={{maxWidth: "160px"}} className={ButtonStyle.submitButton} onClick={fun}>
                Skip
            </button>

            <button style={{maxWidth: "160px",backgroundColor: "#d0d012",border: "yellow"}} className={ButtonStyle.submitButton} onClick={fun}>
                Feedback and Revert
            </button>

            <button style={{maxWidth: "160px",backgroundColor: "#22a822",border: "green"}} className={ButtonStyle.submitButton} onClick={fun}>
                Refer
            </button>
        </div>
  </Card>;
};

export default ResumeCard;

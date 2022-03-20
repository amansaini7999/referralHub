import React, { useState } from 'react';
import ButtonStyle from '../../cards/EditProfile/styles/FormStyle/style.module.css'
import {Card} from 'react-bootstrap';
import styles from './Styles/style.module.css';
import ReviewModal from '../../Card1/ReviewModal';
import { giveFeedback, giveReferral, rejectReferral } from '../../../api/referral';

function fun()
{
    // console.log(" button Clicked");
}
const ResumeCard = ({token, obj}) => {
    const [feedback,setFeedback] = useState("");
    const comp = obj.company;
    const ind = obj.id;
    function feedbackSubmit(){
        // console.log(feedback);
        if(!feedback)
        {
            alert("Feedback can't be empty");
            return;
        }

        giveFeedback(feedback,comp,ind).then((res) => {
            if(res){
                setFeedback("");
                alert(res.message);
            }
        })
    }
    function referFun(){
        if(window.confirm("Are you sure want to refer this referral?")){
            giveReferral(comp,ind).then((res) => {
                if(res)
                alert(res.message);
            })
        }
    }
    function rejectFun(){
        if(window.confirm("Are you sure want to reject this referral?")){
            rejectReferral(comp,ind).then((res) => {
                if(res)
                alert(res.message);
            })
        }
    }
  return <Card className={styles.resumeCard}>
        <div className={styles.cardSection}>
            <div>Company - {obj.company}</div>
            {obj.jobId?<div>JOB ID - {obj.jobId}</div>:null}
            {obj.jobLink?<div>JOB Link - <a target="_blank" style={{textDecoration: "none",backgroundColor:"lightgreen"}} href={obj.jobLink}>Click Here</a></div>:null}
        </div>
       <div className={styles.cardSection}>
           <div>Name - <a style={{color: "black"}} target="_blank" href={`/users/${obj.canId}`}>{obj.canName}</a> </div> 
           <div>Email - {obj.canEmail}</div> 
           <div>Phone - {obj.canPhone}</div> 
       </div>
       <div className={styles.cardSection}>
           <div>Resume - <a href={obj.canResume} target="_blank" style={{textDecoration: "none",backgroundColor:"lightgreen"}}>Click here</a></div>
       </div>
      <div className="d-flex flex-row justify-content-between">
            <button className={ButtonStyle.submitButtonR} onClick={rejectFun}>
                Reject
            </button>
                
            <button className={ButtonStyle.submitButton} onClick={fun}>
                Skip
            </button>

            <ReviewModal feedbackSubmit={feedbackSubmit} feedback={feedback} setFeedback={setFeedback} type={"feedback"} buttonLabel={"Feedback and Revert"} heading={"Feedback and Revert"} msg={"Kindly fill the feedback"}/>

            <button className={ButtonStyle.submitButtonG} onClick={referFun}>
                Refer
            </button>
        </div>
  </Card>;
};

export default ResumeCard;

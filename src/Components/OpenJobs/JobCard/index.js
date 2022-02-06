import React from 'react';
import { Card } from 'react-bootstrap';
import Styles from './Styles/style.module.css';
import ReviewModal from '../../Card1/ReviewModal';
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const JobCard = ({obj}) => {
    // let history = useHistory();

    function SubmitFunction()
    {
      console.log("Request Submitted");
      window.location.reload(false);
    }    
  return <Card className={Styles.card}>
            <div className={Styles.headingSection}>
                <h4 className={Styles.heading}>{obj.JobGiver}</h4>
                <div>{obj.JobGiverPosition}</div>
            </div>
            <div className={Styles.middleSection}>
                <div>Company - {obj.Company}</div>
                <div>JOB ID - {obj.JobID}</div>
                <div>JOB Link - <a target="_blank" style={{textDecoration: "none",backgroundColor:"lightgreen"}} href={obj.JobLink}>Click Here</a></div>
            </div>
            <div className={Styles.description}>
                {obj.JobDecs}
            </div>
            <div className={Styles.buttonSection}>
            <ReviewModal buttonLabel={"REQUEST"} type={ "referralreq"} heading={"Confirm"} msg={"Kindly check your details"} SubmitFunction={SubmitFunction} company={obj.Company} jobId={obj.JobID} jobLink={obj.JobLink}/>
            </div>
        </Card>;
};

export default JobCard;

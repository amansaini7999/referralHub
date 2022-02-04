import React from 'react';
import { Card } from 'react-bootstrap';
import ButtonStyle from '../../cards/EditProfile/styles/FormStyle/style.module.css';
import Styles from './Styles/style.module.css';

function fun()
{
    console.log("button click");
}
const JobCard = ({obj}) => {
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
            <button className={ButtonStyle.submitButton} onClick={fun}>Request</button>
            </div>
        </Card>;
};

export default JobCard;

import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import Styles from './Styles/style.module.css';
import ReviewModal from '../../Card1/ReviewModal';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { getJob, postReferral } from '../../../api/jobListing';
import { Link } from 'react-router-dom';
import { getOwnUser } from '../../../api/user';
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const JobCard = (props) => {
    // let history = useHistory();
    let tempObj = {};
    tempObj.postedBy = {id: "", name: "", infotext: ""};
    tempObj.jobId = "";
    tempObj.jobLink= "";
    tempObj.company="";
    tempObj.desc="";
    const tempUser={
        name: "Rahul Jain",
        email: "xyz@email.com",
        phone_number: "65413974",
        resume_link: "bily.com/xyz311"
    }
    const [obj,setObj] = useState(tempObj);
    const [user, setUser] = useState(tempUser);
    useEffect(() => {
        getOwnUser(props.token).then((res) => {
            setUser(res);
        }) 
        if(props.obj === undefined)
        {
            getJob(props.match.params.jobid).then((res) => {
                setObj(res);
                // console.log(res.postedBy.name);
            })
        }
        else{
            setObj(props.obj);
        }
    },[props.obj])
    

    // console.log(obj);

    function SubmitFunction()
    {
      postReferral(props.token,obj.id).then((res) => {
          alert(res.message);
          console.log(res.message);
      })
    }    
  return <Card className={Styles.card}>
            <a href={`/users/${obj.postedBy.id}`} className={Styles.headingSection}>
                <h4 className={Styles.heading}>{obj.postedBy.name}</h4>
            </a>
            <p className={Styles.infotext}>{obj.postedBy.infotext}</p>
            <div className={Styles.middleSection}>
                <div>Company - {obj.company}</div>
                <div>JOB ID - {obj.jobId}</div>
                <div>JOB Link - <a target="_blank" style={{textDecoration: "none",backgroundColor:"lightgreen"}} href={obj.jobLink}>Click Here</a></div>
            </div>
            <div className={Styles.description}>
                {obj.desc}
            </div>
            <div className={Styles.buttonSection}>
            <ReviewModal user={user} token={props.token} buttonLabel={"REQUEST"} type={ "referralreq"} heading={"Confirm"} msg={"Kindly check your details"} SubmitFunction={SubmitFunction} company={obj.company} jobId={obj.jobId} jobLink={obj.jobLink}/>
            </div>
        </Card>;
};

export default withRouter(JobCard);

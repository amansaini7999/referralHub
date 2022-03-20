import React, { useEffect, useState } from "react";
import { Row, Container } from "react-bootstrap";
import styles from "./style/style.module.css";
import ImageCard from "./imagecard";
import RequestStatus from "./requestStatus";
import {withRouter} from 'react-router-dom'
import { getUser,getSecUser } from "../../api/user";
import ReactLoading from 'react-loading'
import LoadingStyles from '../OpenJobs/Styles/style.module.css'



const Profile = (props) => {
  // console.log(props)
  const tempUser = {
    general: {}
  }
  const tempUserSec = {
    jobPosted: [],
    referralFeedback: []
  }
  const [userData , setUserData] = useState(tempUser);
  const [userSecData, setUserSecData] =useState(tempUserSec);
  const [loading,setLoading] = useState(true);
  useEffect(() =>{
    setLoading(true);
    getUser(props.match.params.userId).then((res)=>{
      if(res)
      setUserData(res);
    });
    getSecUser(props.match.params.userId).then((res)=>{
      setLoading(false);
      if(res){
        setUserSecData(res);
        // console.log(res);
      }
    });
  },[]);
  
  // console.log(userData);
  return (
    <Container>
      <Row className={styles.rw}>
        <ImageCard userData={userData.general} token={props.token} userId={props.userId} id={props.match.params.userId}/>
      </Row>

      {loading?
      <ReactLoading className={LoadingStyles.loadingProfile} type="bars" color="black" height={667} width={375} />
      :
      <div>
      {userSecData.referralFeedback.length > 0 ? (
        <Row className={styles.rw}>
          <RequestStatus token={props.token} detailsarr={userSecData.referralFeedback} userId={props.userId} id={props.match.params.userId} isApplied={true} />
        </Row>
      ) : null
      }

      {userSecData.jobPosted.length > 0 ? (
        <Row className={styles.rw}>
          <RequestStatus cur_comp={userData.general.current_company} token={props.token} detailsarr={userSecData.jobPosted} userId={props.userId} id={props.match.params.userId} isApplied={false} />
        </Row>
      ) : null
      } 
      </div>}
    </Container>
  );
};

export default withRouter(Profile);

import React, { useEffect } from "react";
import { Card, Row } from "react-bootstrap";
import styles from "./style/style.module.css";
import RefereeInfo from "./refreedetails";
import ReferrerInfo from "./referrerdetails";
import EditProfile from '../../cards/EditProfile'
import { useState } from "react";

const ProfileCard = ({ userData, token, id,userId }) => {
  
  // console.log(userData);

  const [data , setData] = useState(userData);
  useEffect(()=> {
    setData(userData);
  },[userData]);

  const isReferee = data.isReferee;
  

  return (
    <Card className={styles.card}>
      <Row className={styles.backg}></Row>
      <Row className={styles.im}>{userData.profile_pic?<img className= {styles.profile} src={userData.profile_pic} alt="pic" />:null}</Row>
      {id===userId?<EditProfile token={token} data ={data} setData={setData} type={isReferee?"referee":"referrer"}/>:<div className={styles.buffer}></div>}
      <Row className={styles.details}>
        {isReferee ? (
          <RefereeInfo
            year={data.graduating_year}
            infotext={data.infotext}
            name={data.name}
            college={data.institute}
            githublink={data.github}
            leetcodelink={data.leetcode}
            linkedinlink={data.linkedin}
            resume={data.resume_link}
            codeforcesLink={data.codeforces}
            codechefLink = {data.codechef}
            email={data.email}
          />
        ) : (
          <ReferrerInfo infotext={data.infotext} name={data.name} leetcodelink={data.leetcode}
            email={data.email}
            linkedinlink={data.linkedin} current_company={data.current_company}  githublink={data.github} />
        )}
      </Row>
    </Card>
  );
};

export default ProfileCard;

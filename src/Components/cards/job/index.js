import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Row,
  Form,
  InputGroup,
  FormControl,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import styles from "./style/style.module.css";
import DropdownStyles from '../../cards/job/style/style.module.css';
import ReviewModal from '../../Card1/ReviewModal';

const companyname = [
  {
    id: 1,
    name: "Microsoft",
  },
  {
    id: 2,
    name: "RazorPay",
  },
  {
    id: 3,
    name: "Amazon",
  },
  {
    id: 4,
    name: "Intuit",
  },
  {
    id: 5,
    name: "Hashedin",
  },
  {
    id: 6,
    name: "Morgan Stanley",
  },
];

//this is for create job


const CreateJob = (props) => {
  const [company,setCompany] = useState("");
  const [jobId,setJobId] = useState("");
  const [jobLink,setJobLink] = useState("");
  const [jobDesc,setJobDesc] = useState("");
  let history = useHistory();

  function SubmitFunction()
  {
    console.log("Submitted new job");
    let path = "/referral/createjob/submitted";
    history.push(path);
  }
  return (
    <div>
      <div className={styles.drpdown}>
        <InputGroup className="mb-3">
        <FormControl onChange={(e)=>{setCompany(e.target.value)}} value={company}
            placeholder="Company Name"
            aria-label="company-name"
            aria-describedby="basic-addon2"/>
            <DropdownButton className="dropDownBtn"> 
              {companyname.map((obj) => (
                <div key={obj.id}>
                  <Dropdown.Item onClick={()=>setCompany(obj.name)}>{obj.name}</Dropdown.Item>

                  <hr className={DropdownStyles.hr}></hr>
                </div>
              ))}
            </DropdownButton>
        </InputGroup>
      </div>
      <div className={styles.input}>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Job ID" onChange={(e)=>{setJobId(e.target.value)}} value={jobId}/>
        </Form.Group>
      </div>

      <div className={styles.or}>OR</div>
      <div className={styles.input}>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Job Link" onChange={(e)=>{setJobLink(e.target.value)}} value={jobLink}/>
        </Form.Group>
      </div>
      <div className={styles.desc}>
        {/* <Form.Control as="textarea" placeholder="Description"  onChange={(e)=>{setJobDesc(e.target.value)}} value={jobDesc}/> */}
        <textarea className={styles.txtArea} placeholder="Description"  onChange={(e)=>{setJobDesc(e.target.value)}} value={jobDesc} cols="30" rows="4"></textarea>
      </div>
      <div style={{textAlign: "center" , marginTop: "5px"}}>
        <ReviewModal buttonLabel={"REQUEST"} type={"createjob"} heading={"Review"} msg={"Kindly check your details"} isReferReq={false} SubmitFunction={SubmitFunction} company={company} jobId={jobId} jobLink={jobLink} desc={jobDesc}/>
      </div>
    </div>
  );
};
export default CreateJob;

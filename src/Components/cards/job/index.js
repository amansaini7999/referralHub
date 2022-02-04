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


const CreateJob = (props) => {
  const [company,setCompany] = useState("");
  const [jobId,setJobId] = useState("");
  const [jobLink,setJobLink] = useState("");
  const [jobDesc,setJobDesc] = useState("");
  let history = useHistory();

  function SubmitFunction()
  {
    console.log("Submitted");
    let path = "/referral/createjob/submitted";
    history.push(path);
  }
  return (
    <div>
      <Row className={styles.drpdown}>
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
      </Row>
      <Row className={styles.input}>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Job ID" onChange={(e)=>{setJobId(e.target.value)}} value={jobId}/>
        </Form.Group>
      </Row>

      <Row className={styles.or}>OR</Row>
      <Row className={styles.input}>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Job Link" onChange={(e)=>{setJobLink(e.target.value)}} value={jobLink}/>
        </Form.Group>
      </Row>
      <Row className={styles.desc}>
        <Form.Control className={styles.txtArea} as="textarea" placeholder="Description"  onChange={(e)=>{setJobDesc(e.target.value)}} value={jobDesc}/>
      </Row>
      <div style={{textAlign: "center" , marginTop: "20px"}}>
        <ReviewModal isReferReq={false} SubmitFunction={SubmitFunction} company={company} jobId={jobId} jobLink={jobLink} desc={jobDesc}/>
      </div>
    </div>
  );
};
export default CreateJob;

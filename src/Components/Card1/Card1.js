import React from 'react'
import {useState} from 'react';
import "./Card1.css"
import { Card,FormControl,InputGroup,Modal,DropdownButton,CloseButton,Button,Dropdown} from 'react-bootstrap'
import DropdownStyles from '../cards/job/style/style.module.css';
import ReviewModal from './ReviewModal';
import { useHistory } from 'react-router-dom';
  
// Card to Request Job Referral
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

function func()
{
  console.log("Input Set");

}

// this is for referral req 
function Card1()
{
  const [company,setCompany] = useState("");
  const [jobId, setJobId] = useState("");
  const [jobLink, setJobLink] = useState("");
  let history = useHistory();

  function SubmitFunction()
  {
    console.log("Submitted referral req");
    let path = "/refreq/submitted";
    history.push(path);
  }
    
  return (
      <Card className="text-center firstCard mt-5 mb-5" border="primary" style={{ width: '40rem' }}>    
        <CloseButton className="closeButton"/>
        
        <Card.Body>
          <h4 className="heading">Welcome</h4>
          <Card.Text className="text">
            Kindly fill in the details to proceed
          </Card.Text>
          
          <hr className="horizotal-line"/>
          <>
            <br/>
            <InputGroup className="mb-3" >
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
          </>
          
          <FormControl onChange={(e)=>{setJobId(e.target.value)}} value={jobId}
          placeholder="JOB ID"
          aria-label="job-id"
          aria-describedby="basic-addon2"/>  
          <h3 className="heading-third">OR</h3>
          <FormControl onChange={(e)=>{setJobLink(e.target.value)}} value={jobLink}
          placeholder="JOB Link"
          aria-label="job-link"
          aria-describedby="basic-addon2"/>
                  
          <br/>
          <ReviewModal buttonLabel={"REQUEST"} type={ "createreferralreq"} heading={"Review"} msg={"Kindly check your details"} isReferReq={true} SubmitFunction={SubmitFunction} company={company} jobId={jobId} jobLink={jobLink}/>
        </Card.Body>
      </Card>
  )
    
}
export default Card1;
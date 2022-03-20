import React, { useEffect } from 'react'
import {useState} from 'react';
import "./Card1.css"
import { Card,FormControl,InputGroup,DropdownButton,CloseButton,Dropdown} from 'react-bootstrap'
import DropdownStyles from '../cards/job/style/style.module.css';
import ReviewModal from './ReviewModal';
import { useHistory } from 'react-router-dom';
import { getOwnUser } from '../../api/user';
import { addJob, postReferral } from '../../api/jobListing';
  
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



// this is for referral req 
function Card1(props)
{
  const [company,setCompany] = useState("");
  const [jobId, setJobId] = useState("");
  const [jobLink, setJobLink] = useState("");
  const tempUser={
    name: "",
    email: "",
    phone_number: "",
    resume_link: ""
  }

  const [user, setUser] = useState(tempUser);
  useEffect(()=>{
    getOwnUser().then((res) => {
      if(res)
      setUser(res);
    }) 
  })

  function SubmitFunction()
  {
    if(company==="")
    {
      alert("Company Name is required");
    }
    else
    {
      if(jobId==="" && jobLink==="")
      {
        alert("Job Id/Job Link is required");
      }
      else{
        addJob({self: true,isActive: false, company: company,jobId: jobId, jobLink: jobLink}).then((jobid) =>{
          postReferral(jobid).then((res) => {
            if(res)
            alert(res.message);
          })
        });

        // console.log("fine");
        
        
      }
    }
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
          <ReviewModal user={user} buttonLabel={"REQUEST"} type={ "createreferralreq"} heading={"Review"} msg={"Kindly check your details"} isReferReq={true} SubmitFunction={SubmitFunction} company={company} jobId={jobId} jobLink={jobLink}/>
        </Card.Body>
      </Card>
  )
    
}
export default Card1;
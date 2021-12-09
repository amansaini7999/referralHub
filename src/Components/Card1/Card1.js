import React from 'react'
import "./Card1.css"
import { Card,FormControl,InputGroup,Modal,DropdownButton,CloseButton} from 'react-bootstrap'
import Button from '../IntroCards/AppButton'
  
function Card1()
{
    return (
        <Card className="text-center firstCard" border="primary" style={{ width: '40rem' }}>
            
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
    <FormControl
      placeholder="Company Name"
      aria-label="company-name"
      aria-describedby="basic-addon2"
    />
   
    <DropdownButton className="dropDownBtn">
    
      
    </DropdownButton>
    
     </InputGroup>
                </>
                
     <FormControl
      placeholder="JOB ID"
      aria-label="job-id"
      aria-describedby="basic-addon2"
                />
          
          <h3 className="heading-third">OR</h3>
                <FormControl
      placeholder="JOB Link"
      aria-label="job-link"
      aria-describedby="basic-addon2"
                />
                
                <br/>
                <Button label="Request" className="requestBtn"/>
  </Card.Body>
 
        </Card>
        
    )
    
}
export default Card1;
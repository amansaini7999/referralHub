import React from 'react';
import ReviewCard from '../Review';
import { useState,useEffect } from 'react';
import { Modal,Button} from 'react-bootstrap';
import ButtonStyles from '../../cards/EditProfile/styles/FormStyle/style.module.css';
import styles from './Styles/style.module.css'


const ReviewModal = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [user, setUser] = useState(props.user);
    useEffect(()=>{
        setUser(props.user);
    },[props.user]);
    const [feedback, setFeedback] =useState("");
    let buttonContainer=null;
    let bodyContainer=null;
    let footerContainer=null;
    function FeedbackSubmitFunction()
    {
      console.log(feedback);
      window.location.reload(false);
    }
    switch (props.type) {
      case "createreferralreq":
        {
          buttonContainer=<button className={ButtonStyles.submitButton} onClick={handleShow}>
          {props.buttonLabel}
          </button>;
          bodyContainer=<ReviewCard type={"createreferralreq"} company={props.company} jobId={props.jobId} jobLink={props.jobLink}/>;
          footerContainer=<><Button variant="secondary" onClick={handleClose}>
          Edit
          </Button>
          <Button variant="primary" onClick={props.SubmitFunction}>Submit</Button></>;
        }
        break;
      case "createjob":
        {
          buttonContainer=<button className={ButtonStyles.submitButton} onClick={handleShow}>
          {props.buttonLabel}
          </button>;
          bodyContainer=<ReviewCard type={"createjob"}  company={props.company} jobId={props.jobId} jobLink={props.jobLink} desc={props.desc}/>;
          footerContainer=<><Button variant="secondary" onClick={handleClose}>
          Edit
          </Button>
          <Button variant="primary" onClick={props.SubmitFunction}>Submit</Button></>;
        }
        break;
      case "referralreq":
        {
          buttonContainer=<button className={ButtonStyles.submitButton} onClick={handleShow}>
          {props.buttonLabel}
          </button>;
          bodyContainer=<ReviewCard type={"referralreq"}  user={user} company={props.company} jobId={props.jobId} jobLink={props.jobLink} desc={props.desc}/>;
          footerContainer=<><Button variant="secondary" onClick={handleClose}>
          Edit
          </Button>
          <Button variant="primary" onClick={props.SubmitFunction}>Submit</Button></>;
          
        }
        break;
      case "feedback":
        {
          
          buttonContainer=<button className={ButtonStyles.submitButtonY} onClick={handleShow}>
          {props.buttonLabel}
          </button>;
          bodyContainer=<ReviewCard type={"feedback"} feedback={feedback} setFeedback={setFeedback}/>;
          footerContainer=<>
          <Button variant="primary" onClick={FeedbackSubmitFunction}>Submit</Button></>;
        }
      default:
        break;

    }
  return <>
         {buttonContainer}

        <Modal 
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={show}
            onHide={handleClose}
            // backdrop="static"
            keyboard={false}>

            
            <Modal.Header closeButton>
              
            </Modal.Header>
            
            
            <Modal.Body>
                <div className={styles.headings}>{props.heading}</div>
                <div className={styles.desc}>{props.msg}</div>
                <div className={styles.line}></div>
                {bodyContainer}
            </Modal.Body>
            
            <Modal.Footer>
              {footerContainer}
            </Modal.Footer>
          
        </Modal>
  </>;
};

export default ReviewModal;

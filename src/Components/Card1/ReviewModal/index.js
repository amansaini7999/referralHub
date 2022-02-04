import React from 'react';
import ReviewCard from '../Review';
import { useState } from 'react';
import { Modal,Button } from 'react-bootstrap';
import ButtonStyles from '../../cards/EditProfile/styles/FormStyle/style.module.css'

const ReviewModal = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return <>
         <button className={ButtonStyles.submitButton} onClick={handleShow}>
            Request
          </button>

        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}>
            
            <Modal.Header closeButton>
              <Modal.Title>
                <h4>Review</h4>
              </Modal.Title>
            </Modal.Header>
            
            
            <Modal.Body>
                {(props.isReferReq==true)?
                <ReviewCard isReferReq={props.isReferReq} company={props.company} jobId={props.jobId} jobLink={props.jobLink}/>:
                <ReviewCard isReferReq={props.isReferReq} company={props.company} jobId={props.jobId} jobLink={props.jobLink} desc={props.desc}/>}
            </Modal.Body>
            
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Edit
              </Button>
              <Button variant="primary" onClick={props.SubmitFunction}>Submit</Button>
            </Modal.Footer>
          
        </Modal>
  </>;
};

export default ReviewModal;

import { React, useState,useEffect } from "react";
import styles from "../styles/FormStyle/style.module.css";
import { Form, Row, Modal } from "react-bootstrap";
import editIcon from "../../../../Asset/images/edit-icon.png";
import IconButton from "../../../IconButton";
import { editUser } from "../../../../api/user";

const EditReferrer = ({ token, data, setData, heading, buttonLabel }) => {
  // const { referrer_data, handle, submit } = useReferrerData();
  // data.isReferee=false;
  const [updatedData, setUpdatedData] = useState(data);

  // console.log(updatedData);
  useEffect(()=>{
    setUpdatedData(data);
  },[data]);



  const [show, setShow] = useState(false);
  const handleClose = () => {setShow(false);setUpdatedData(data);}
  const handleShow = () => setShow(true);

  const handle = (e) => {
    const CurupdatedData = { ...updatedData };
    CurupdatedData[e.target.id] = e.target.value;
    setUpdatedData(CurupdatedData);
    // console.log(CurupdatedData);
  }

  const SubmithandleClose = ()=>{
    setShow(false)
  }

  return (
    <>
      <IconButton
        icon={editIcon}
        onClick={handleShow}
        alt="Edit Referrer Profile Button"
      />
      <Modal
        show={show}
        dialogClassName={styles.Modal}
        onHide={handleClose}
        centered
      >
        <Modal.Header className={styles.editProfileHeader} closeButton>
          <Modal.Title className={styles.editProfileTitle}>
            {heading}
          </Modal.Title>
        </Modal.Header>
        <div className={styles.form}>
          <Row>
            <Form onSubmit={(e)=>{e.preventDefault(); setData(updatedData); SubmithandleClose(); editUser(token, updatedData)}}>
              <Modal.Body>
                <div className={styles.formArea}>
                  <Form.Group className="mb-3 mt-3" controlId="name">
                    <Form.Control
                      type="text"
                      placeholder="Full Name"
                      value={updatedData.name}
                      required
                      onChange={(e) => handle(e)}
                      autoFocus
                    />
                  </Form.Group>

                  <Form.Group className="mb-3 mt-3" controlId="infotext">
                    <Form.Control
                      type="text"
                      placeholder="Info"
                      value={updatedData.infotext}
                      required
                      onChange={(e) => handle(e)}
                      autoFocus
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="current_company">
                    <Form.Control
                      type="text"
                      value={updatedData.current_company}
                      placeholder="Current Company"
                      onChange={(e) => handle(e)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="work_experience">
                    <Form.Control
                      type="number"
                      value={updatedData.work_experience}
                      placeholder="Work Experience"
                      min="0"
                      onChange={(e) => handle(e)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="github">
                    <Form.Control
                      type="url"
                      value={updatedData.github}
                      onChange={(e) => handle(e)}
                      placeholder="Github"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="linkedin">
                    <Form.Control
                      type="url"
                      value={updatedData.linkedin}
                      onChange={(e) => handle(e)}
                      placeholder="Linkedin"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="phone_number">
                    <Form.Control
                      type="tel"
                      value={updatedData.phone_number}
                      onChange={(e) => handle(e)}
                      placeholder="Phone Number"
                      minLength="10"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="job_role">
                    <Form.Control
                      type="text"
                      value={updatedData.job_role}
                      onChange={(e) => handle(e)}
                      placeholder="Job Role"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="leetcode">
                    <Form.Control
                      type="url"
                      value={updatedData.leetcode}
                      onChange={(e) => handle(e)}
                      placeholder="Leetcode(optional)"
                    />
                  </Form.Group>
                </div>
              </Modal.Body>
              <Modal.Footer className={styles.editProfileFooter}>
                <div className={styles.buttonContainer}>
                  <button type="submit" className={styles.submitButton}>
                    {buttonLabel}
                  </button>
                </div>
              </Modal.Footer>
            </Form>
          </Row>
        </div>
      </Modal>
    </>
  );
};

export default EditReferrer;

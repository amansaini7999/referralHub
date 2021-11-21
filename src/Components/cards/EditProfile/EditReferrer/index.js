import { React, useState } from "react";
import styles from "../styles/FormStyle/style.module.css";
import { Form, Row, Modal } from "react-bootstrap";
import editIcon from "../../../../Asset/images/edit-icon.png";
import IconButton from "../../../IconButton";
import useReferrerData from "./logic";

const EditReferrer = ({ heading, buttonLabel }) => {
  const { referrer_data, handle, submit } = useReferrerData();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            <Form onSubmit={(e) => submit(e)}>
              <Modal.Body>
                <div className={styles.formArea}>
                  <Form.Group className="mb-3 mt-3" controlId="full_name">
                    <Form.Control
                      type="text"
                      placeholder="Full Name"
                      value={referrer_data.full_name}
                      required
                      onChange={(e) => handle(e)}
                      autoFocus
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="current_company">
                    <Form.Control
                      type="text"
                      value={referrer_data.current_company}
                      placeholder="Current Company"
                      onChange={(e) => handle(e)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="work_experience">
                    <Form.Control
                      type="number"
                      value={referrer_data.work_experience}
                      placeholder="Work Experience"
                      min="0"
                      onChange={(e) => handle(e)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="email">
                    <Form.Control
                      type="email"
                      value={referrer_data.email}
                      onChange={(e) => handle(e)}
                      placeholder="Email"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="linkedin">
                    <Form.Control
                      type="url"
                      value={referrer_data.linkedin}
                      onChange={(e) => handle(e)}
                      placeholder="Linkedin"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="phone_number">
                    <Form.Control
                      type="tel"
                      value={referrer_data.phone_number}
                      onChange={(e) => handle(e)}
                      placeholder="Phone Number"
                      minLength="10"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="job_role">
                    <Form.Control
                      type="text"
                      value={referrer_data.job_role}
                      onChange={(e) => handle(e)}
                      placeholder="Job Role"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="leetcode">
                    <Form.Control
                      type="url"
                      value={referrer_data.leetcode}
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

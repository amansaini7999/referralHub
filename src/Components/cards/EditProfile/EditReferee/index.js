import { React, useState } from "react";
import styles from "../styles/FormStyle/style.module.css";
import { Form, Row, Modal } from "react-bootstrap";
import editIcon from "../../../../Asset/images/edit-icon.png";
import IconButton from "../../../IconButton";
import useRefereeData from "./logic";

const EditReferee = ({ heading, buttonLabel }) => {
  const { referee_data, handle, submit } = useRefereeData();

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
                      value={referee_data.full_name}
                      placeholder="Full Name"
                      onChange={(e) => handle(e)}
                      required
                      autoFocus
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="institute">
                    <Form.Control
                      type="text"
                      value={referee_data.institute}
                      onChange={(e) => handle(e)}
                      placeholder="Institute"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="branch">
                    <Form.Control
                      type="text"
                      value={referee_data.branch}
                      onChange={(e) => handle(e)}
                      placeholder="Branch"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="cgpa">
                    <Form.Control
                      type="number"
                      value={referee_data.cgpa}
                      placeholder="CGPA(optional)"
                      step="0.01"
                      min="0"
                      max="10"
                      onChange={(e) => handle(e)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="linkedin">
                    <Form.Control
                      type="url"
                      value={referee_data.linkedin}
                      onChange={(e) => handle(e)}
                      placeholder="Linkedin"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="codechef">
                    <Form.Control
                      type="url"
                      value={referee_data.codechef}
                      placeholder="Codechef(optional)"
                      onChange={(e) => handle(e)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="codeforces">
                    <Form.Control
                      type="url"
                      value={referee_data.codeforces}
                      placeholder="Codeforces(optional)"
                      onChange={(e) => handle(e)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="leetcode">
                    <Form.Control
                      type="url"
                      value={referee_data.leetcode}
                      placeholder="Leetcode(optional)"
                      onChange={(e) => handle(e)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="resume_link">
                    <Form.Control
                      type="url"
                      value={referee_data.resume_link}
                      placeholder="Resume(GDRIVE LINK)"
                      onChange={(e) => handle(e)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="graduating_year">
                    <Form.Control
                      type="number"
                      value={referee_data.graduating_year}
                      placeholder="Graduating Year"
                      onChange={(e) => handle(e)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="phone_number">
                    <Form.Control
                      type="tel"
                      value={referee_data.phone_number}
                      placeholder="Mobile Number"
                      onChange={(e) => handle(e)}
                      minLength="10"
                      required
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

export default EditReferee;

import React from "react";
import {
  Row,
  Form,
  InputGroup,
  FormControl,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import styles from "./style/style.module.css";

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

const createJob = (props) => {
  return (
    <div>
      <Row className={styles.drpdown}>
        <InputGroup className="mb-3">
          <FormControl aria-label="Text input with dropdown button" />

          <DropdownButton
            variant="outline-secondary"
            title="Dropdown"
            id="input-group-dropdown-2"
            align="end"
          >
            {companyname.map((obj) => (
              <div key={obj.id}>
                <Dropdown.Item href="#">{obj.name}</Dropdown.Item>

                <hr className={styles.hr}></hr>
              </div>
            ))}
          </DropdownButton>
        </InputGroup>
      </Row>
      <Row className={styles.input}>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Job ID" />
        </Form.Group>
      </Row>

      <Row className={styles.or}>OR</Row>
      <Row className={styles.input}>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Job Link" />
        </Form.Group>
      </Row>
      <Row className={styles.desc}>
        <Form.Control as="textarea" placeholder="Description" />
      </Row>
    </div>
  );
};
export default createJob;

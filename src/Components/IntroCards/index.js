import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import IntroCard from './IntorCard';
import ReferralStats from './ReferralStates';
import Recent from './Recent';
import styles from './Style/styles.module.css';
import AddJobs from './AddJobs';
import OpenJobs from './OpenJobs';


const Intro = () => {
    return (
    <Container>
    <Row>
        <Col>
        <Row className={styles.rw}><ReferralStats/></Row>
        <Row className={styles.rw}><OpenJobs/></Row>
        </Col>
        <Col xs={8}>
        <Row className={styles.rw}><IntroCard/></Row>
        <Row className={styles.rw}><AddJobs/></Row>
        </Col>
        <Col><Recent/></Col>
    </Row>
    </Container>
    )
}

export default Intro;

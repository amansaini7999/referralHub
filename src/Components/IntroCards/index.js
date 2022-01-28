import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import IntroCard from './IntorCard';
import ReferralStats from './ReferralStates';
import Recent from './Recent';
import styles from './Style/styles.module.css';
import AddJobs from './AddJobs';
import OpenJobs from './OpenJobs';
import Refreq from './refreq';


const Intro = ({referral}) => {
    return (
    <Container>
    <Row>
        <Col>
        <Row className={styles.rw}><ReferralStats/></Row>
        <Row className={styles.rw}><OpenJobs/></Row>
        </Col>
        <Col xs={8}>
        <Row className={styles.rw}><IntroCard/></Row>
        {referral?<Row className={styles.rw}><AddJobs/></Row>:<Row className={styles.rw}><Refreq/></Row>}
        
        </Col>
        <Col><Recent/></Col>
    </Row>
    </Container>
    )
}

export default Intro;

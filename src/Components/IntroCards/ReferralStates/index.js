import React from 'react'
import styles from './Style/style.module.css'
import {Card, Row} from 'react-bootstrap';

const ReferralStats = () => {
    return (
        <Card className={`${styles.crd} ${styles.small}`}>
            <Card.Body>
                <Row className={styles.rw}>
                <Row>
                    6:30 PM
                </Row>
                <Row>
                   20.10.21 
                </Row>
                </Row>

                <Row className={styles.rw}>
                <Row>
                    Total Referral Done
                </Row>
                <Row>
                   127 Referral
                </Row>
                </Row>

                <Row className={styles.rw}>
                <Row>
                    Present Day
                </Row>
                <Row>
                   13 Referral 
                </Row>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default ReferralStats;

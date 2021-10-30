import Button from './Button'
import React from 'react'
import { Card, Row } from 'react-bootstrap';
import styles from './style/style.module.css'

const OpenJobs = () => {
    return (
        <Card className={styles.card}>
            <Row className="justify-content-center">
              <Button label="Open Jobs"/>
            </Row>
            <Row className="justify-content-center">
                <Button label="Referral Request"/>
            </Row>
        </Card>
    )
}

export default OpenJobs

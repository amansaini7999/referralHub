import React from 'react'
import { Col, Row } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import * as styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
                <Row>
                    <Col lg={8} md={8} className={styles.content}>
                    <h3 className={styles.logo}>REFERRAL HUB</h3>
                    <div className={styles.para}>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis animi a, neque quam tenetur est blanditiis possimus magnam deleniti ad maiores officiis sed doloribus laboriosam sequi, rem aut at exercitationem.
                        </p>
                    </div>
                    </Col>
                    
                    <Col lg={3} md={8} className={styles.content}>
                        <h3>Contact Us</h3>
                        <p>8000000581</p>
                        <p>XYZ@gmail.com</p>
                    </Col>
                </Row>
        </footer>
    )
}

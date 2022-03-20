import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import * as styles from './Footer.module.css'
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";


export default function Footer() {
    return (
        <footer className={styles.footer}>
                <Row>
                    <Col lg={8} md={8} className={styles.content}>
                    <h3 className={styles.logo}>REFERRAL HUB</h3>
                    <div className={styles.para}>
                        <p>The main motive of ReferralHub is to make process of giving Referral easier.</p>
                        <h5 style={{color: "inherit"}}>Follow Us</h5>
                        <a href="#"><FaFacebook style={{margin: "8px",marginLeft: "0px",width: "27px",height: "27px"}}/></a>
                        <a href="#"><FaLinkedin style={{margin: "8px",width: "27px",height: "27px"}}/></a>
                        <a href="#"><FaInstagram style={{margin: "8px",width: "27px",height: "27px"}}/></a>
                    </div>
                    </Col>
                    
                    <Col lg={3} md={8} className={styles.content}>
                        <h3>Contact Us</h3>
                        <p>6295787667</p>
                        <Link style={{color: "white"}}
                            to='gbhabra0022@gmail.com'
                            onClick={(e) => {
                                window.location.href = "mailto:gbhabra0022@gmail.com"
                                e.preventDefault();
                            }}
                        >
                            Send Mail
                        </Link>
                    </Col>
                </Row>
        </footer>
    )
}

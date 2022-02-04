import React from 'react';
import { Card } from 'react-bootstrap';
import styles from './styles/style.module.css'
import logo from '../../Asset/images/blueTick.png'
import home from '../../Asset/images/Home_Icon.png'

const Submitted = () => {
  return <Card className={styles.mainCard}>
      <img className={styles.image} src={logo} alt="blue tick" />
      <h1>Thank You !</h1>
      <div style={{fontSize: "large", color: "black",marginBottom: "18px"}}>Your Submission has been sent</div>
      <a href="/"><img className={styles.image} style={{maxWidth: "10%"}} src={home} alt="go to home" /></a>
      
  </Card>;
};

export default Submitted;

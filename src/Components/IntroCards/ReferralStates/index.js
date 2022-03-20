import React,{useState,useEffect} from 'react'
import styles from './Style/style.module.css'
import {Card, Row} from 'react-bootstrap';
const ReferralStats = () => {
    const locale = 'en';
    const [today, setDate] = useState(new Date()); // Save the current date to be able to trigger an update
  
    useEffect(() => {
        const timer = setInterval(() => { // Creates an interval which will update the current data every minute
        // This will trigger a rerender every component that uses the useDate hook.
        setDate(new Date());
      }, 1000);
      return () => {
        clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
      }
    }, []);
  
    const day = today.toLocaleDateString(locale, { weekday: 'long' });
    const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;
  
    // const hour = today.getHours();
    
  
    const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });
    return (
        <Card className={`${styles.crd} ${styles.small}`}>
            <Card.Body>
                <Row className={styles.rw}>
                <Row>
                    {time}
                </Row>
                <Row>
                   {date}
                </Row>
                </Row>

                <Row className={styles.rw}>
                <Row>
                    Total Referral Done
                </Row>
                {/* <Row>
                   127 Referral
                </Row> */}
                </Row>

                <Row className={styles.rw}>
                <Row>
                    Present Day
                </Row>
                {/* <Row>
                   13 Referral 
                </Row> */}
                </Row>
            </Card.Body>
        </Card>
    )
}

export default ReferralStats;

import React,{useState,useEffect} from 'react'
import { Card,Col,Row} from 'react-bootstrap'
import styles from './Style/style.module.css'
import Img from '../../../Asset/images/intro-message-illustration.png'

const IntroCard = () => {
    // const locale = 'en';
    const [today, setDate] = useState(new Date()); // Save the current date to be able to trigger an update
  
    useEffect(() => {
        const timer = setInterval(() => { // Creates an interval which will update the current data every minute
        // This will trigger a rerender every component that uses the useDate hook.
        setDate(new Date());
      }, 10*60*1000);
      return () => {
        clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
      }
    }, []);
  
    const hour = today.getHours();
    const wish = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'}, `;
    return (
        <Card className={styles.midCard}>
            <Row>
                <Col className={styles.fstCol}>
                <h1 className={styles.hd}>{wish} Welcome to ReferralHub</h1>
                <div>
                    This website is about making referral process easier. Here you can post jobs. You can request referral for jobs. You can see all the referral requests available and also you can give feedback, reject referral or refer referral.
                </div>
                </Col>
                <Col>
                <img className={styles.im} src={Img} alt="Italian Trulli"/>
                </Col>
            </Row>
        </Card>
    )
}

export default IntroCard

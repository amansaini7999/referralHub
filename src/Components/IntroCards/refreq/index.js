import React from 'react'
import { Card,Row } from 'react-bootstrap'
import styles from './styles/style.module.css'
import Button from '../AppButton'
import { useHistory } from 'react-router-dom'
import ButtonStyles from '../../cards/EditProfile/styles/FormStyle/style.module.css'



const Refreq = () => {
    const navigate = useHistory();

    const func = ()=>{
    let path=`/refreq`;
    navigate.push(path);
    console.log("button click");
    }
    return (
        <Card className={styles.card}>
            <Row className="justify-content-center">
               <h4 className={styles.headerDiv}>If you have a Job ID / Link. You can directly request from here.</h4> 
            </Row>
            <div style={{textAlign : "center"}}>
                <button className={ButtonStyles.submitButton} onClick={func}>Click Here</button>
            </div>
        </Card>
    )
}

export default Refreq;

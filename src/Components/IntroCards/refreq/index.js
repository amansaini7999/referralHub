import React from 'react'
import { Card,Row } from 'react-bootstrap'
import styles from './styles/style.module.css'
import Button from '../AppButton'
import { useHistory } from 'react-router-dom'



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
            <Row className="justify-content-center">
                <Button label="Click Here" handleClick={func}/>
            </Row>
        </Card>
    )
}

export default Refreq;

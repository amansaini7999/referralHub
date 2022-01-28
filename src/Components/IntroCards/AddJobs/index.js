import React from 'react'
import { Card,Row } from 'react-bootstrap'
import styles from './style/style.module.css'
import Button from '../AppButton'
import { useHistory } from 'react-router-dom'



const AddJobs = () => {
    const navigate = useHistory();

    const func = ()=>{
    let path=`/referral/createjob`;
    navigate.push(path);
    console.log("button click");
    }
    return (
        <Card className={styles.card}>
            <Row className="justify-content-center">
               <h4 className={styles.headerDiv}>Add Jobs.</h4> 
            </Row>
            <Row className="justify-content-center">
                <Button label="Click Here" handleClick={func}/>
            </Row>
        </Card>
    )
}

export default AddJobs;

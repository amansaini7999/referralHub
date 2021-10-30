import React from 'react'
import { Card,Row } from 'react-bootstrap'
import styles from './style/style.module.css'
import Button from '../AppButton'

const func = ()=>{
  console.log("button click");
}

const AddJobs = () => {
    return (
        <Card className={styles.card}>
            <Row className="justify-content-center">
               <h4 className={styles.headerDiv}>If you have a JOb ID / Link. You can directly request from here.</h4> 
            </Row>
            <Row className="justify-content-center">
                <Button label="Click Here" handleClick={func}/>
            </Row>
        </Card>
    )
}

export default AddJobs

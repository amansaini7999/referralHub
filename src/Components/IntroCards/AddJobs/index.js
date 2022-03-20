import React from 'react'
import { Card,Row } from 'react-bootstrap'
import styles from './style/style.module.css'
// import Button from '../AppButton'
import { useHistory } from 'react-router-dom'
import ButtonStyles from '../../cards/EditProfile/styles/FormStyle/style.module.css'



const AddJobs = () => {
    const navigate = useHistory();

    const func = ()=>{
        let path=`/createjob`;
        navigate.push(path);
        // console.log("button click");
    }
    return (
        <Card className={styles.card}>
            <Row className="justify-content-center">
               <h4 className={styles.headerDiv}>Add Jobs.</h4> 
            </Row>
            <div style={{textAlign : "center"}}>
                <button className={ButtonStyles.submitButton} onClick={func}>Click Here</button>
            </div>
        </Card>
    )
}

export default AddJobs;

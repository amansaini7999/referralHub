import Button from './Button'
import React from 'react'
import { Card, Row } from 'react-bootstrap';
import styles from './style/style.module.css'
import { useHistory } from 'react-router-dom'

const OpenJobs = () => {
    const navigate = useHistory();

    const func1 = ()=>{
    let path=`/`;
    navigate.push(path);
    console.log("button click");
    }

    const func2 = ()=>{
        let path=`/referral`;
        navigate.push(path);
        console.log("button click");
        }
    return (
        <Card className={styles.card}>
            <Row className="justify-content-center">
              <Button label="Open Jobs" handleClick={func1}/>
            </Row>
            <Row className="justify-content-center">
                <Button label="Referral Request" handleClick={func2}/>
            </Row>
        </Card>
    )
}

export default OpenJobs

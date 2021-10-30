import React from 'react'
import styles from './Style/style.module.css';


const Info = ({obj}) => {
    return (
        <>
           <p className={`${styles.para} ${styles.midPara}`}>{obj.header}</p>
           <p className={styles.midPara}>Referred by {obj.body}</p> 
        </>
    )
}

export default Info;

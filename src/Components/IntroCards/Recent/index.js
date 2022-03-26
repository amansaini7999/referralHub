import React from 'react';
import { Card } from 'react-bootstrap';
import styles from './Style/style.module.css';

// const arr=[
//     {
//         id: 1,
//         header: "Chandan Das",
//         body: "Ajay Singh"
//     },
//     {
//         id: 2,
//         header: "Chandan Das",
//         body: "Ajay Singh"
//     },
//     {
//         id: 3,
//         header: "Chandan Das",
//         body: "Ajay Singh"
//     },
//     {
//         key: 4,
//         header: "Chandan Das",
//         body: "Ajay Singh"
//     },
//     {
//         id: 5,
//         header: "Chandan Das",
//         body: "Ajay Singh"
//     },
//     {
//         id: 6,
//         header: "Chandan Das",
//         body: "Ajay Singh"
//     },
//     {
//         id: 7,
//         header: "Chandan Das",
//         body: "Ajay Singh"
//     },
//     {
//         id: 8,
//         header: "Chandan Das",
//         body: "Ajay Singh"
//     },
//     {
//         id: 9,
//         header: "Chandan Das",
//         body: "Ajay Singh"
//     }
    
// ]

const Recent = () => {
    return (
        <Card className={styles.midCard}>
          <p className={`${styles.hdPara} ${styles.midPara}`}>Recently Accepted Requestes</p>
          {/* {arr.map(obj => <div key={obj.id}>
              <Info obj={obj}/>
          </div> )} */}
        </Card>
    )
}

export default Recent;

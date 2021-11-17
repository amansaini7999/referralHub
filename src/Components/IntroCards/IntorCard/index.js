import React from 'react'
import { Card,Col,Row} from 'react-bootstrap'
import styles from './Style/style.module.css'

const IntroCard = () => {
    return (
        <Card className={styles.midCard}>
            <Row>
                <Col className={styles.fstCol}>
                <h1 className={styles.hd}>Intorduction mesaage</h1>
                <div>
                    Lorem, ipsum dolor sit amtur quas maxime quaerat iure porro nemo rem voluptate, vitae nisi laborum perferendis fuga doloribus dicta cupiditate ipsam modi? Ipsum nisi totam est, natus modi magni velit architecto accusamus. Velit quisquam magni amet, id ab, aut nemo hic cupiditate corrupti, suscipit corporis veniam deserunt voluptatem. Cum mollitia quaerat libero!
                </div>
                </Col>
                <Col>
                <img className={styles.im} src="Assets/intro-message-illustration.png" alt="Italian Trulli"/>
                </Col>
            </Row>
        </Card>
    )
}

export default IntroCard

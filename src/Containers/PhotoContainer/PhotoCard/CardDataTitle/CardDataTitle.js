import React from 'react'
import styles from './CardDataTitle.module.css';

const CardDataTitle = (props) => {
    return (
        <dt className={styles.cardDataTitle}>
            {props.children}
            {props.details}
        </dt>
    )
}

export default CardDataTitle

import React from 'react';
import styles from './IconPhotos.module.css';

const IconPhotos = (props) => {
    return (
        <li style={{ padding: 0 }}>
            <a href="#">
                <div className={styles.imageContainer}>
                    <img className={styles.image} src={props.srcSet} width="20" height="20" alt="Go to Wolfgang Hasselmann's profile" />
                </div>
            </a>
        </li>
    )
}

export default IconPhotos

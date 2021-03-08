import React from 'react';
import styles from './MenuHeader.module.css';

const TOPIC_LIST = [
    'Color Theory', 'Architecture', 'Wallpaper', 'Nature', 'People', 'Current Events', 'Bussiness & Work', 'Experimental', 'Fashion', 'Film', 'Health & Wellness', 'Interior', 'Street Photography', 'Technology', 'Travel', 'Textures & Patterns', 'Animals', 'Food & Drink', 'Athlete', 'Spirituality', 'Arts & Culture', 'History'
]

const MenuHeader = () => {
    return (
        <div className={styles.menuHeader}>
            <div className={styles.leftMenuHeader}>
                <ul>
                    <li>
                        <a href="#">
                            <span>Editorial</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div className={styles.divider}></div>

            <div className={styles.topicContainer}>
                <div className={styles.topicList}>
                    <ul>
                        {TOPIC_LIST.map((name, idx) => {
                            return (
                                <li key={idx}>
                                    <a href="#">
                                        <span>{name}</span>
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

            <div className={styles.rightMenuHeader}>
                <a href="#">
                    <span>ViewAll</span>
                </a>
            </div>
        </div>
    )
}

export default MenuHeader
import React from 'react';
import styles from './PhotoTitle.module.css'

const PhotoTitle = () => {
    return (
        <div>
            <h1>Nature</h1>
            <h2>
                Let’s celebrate the magic of Mother Earth — with images of everything our planet has to offer,
                from stunning seascapes, starry skies, and everything in between.
            </h2>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <span>Supported By</span>
                <div className={styles.image}>
                    <img src="https://images.unsplash.com/file-1613596651301-295c081cd4b7image"></img>
                </div>
            </div>
            <div className={styles.design}>Original Design by</div>
        </div>
    )
}

export default PhotoTitle

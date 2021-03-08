import React from 'react';
import styles from './GridColumn.module.css'

const GridColumn = (props) => {
    return (
        <div className={styles.gridCol}>
            { props.collection.map(photo => {
                return (
                    <img key={photo.id} style={{ width: '100%', height: 'auto' }} src={`${photo.urls.raw}&width=347&drp=2`} alt='grid photo' />
                )
            })}
        </div>
    )
}

export default GridColumn

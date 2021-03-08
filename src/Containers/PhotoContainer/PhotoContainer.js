import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PhotoTitle from './PhotoTitle/PhotoTitle';
import PhotoCard from './PhotoCard/PhotoCard';
import GridColumn from './GridColumn/GridColumn';
import useWindowSize from './../../hooqs/resize';

import styles from './PhotoContainer.module.css';
import { getPhotosByTopic } from './../../store/actions/index';


const PhotoContainer = (props) => {
    const [phototCollection, setPhotoCollection] = useState();
    const photo = useSelector(state => state.photo);
    const dispatch = useDispatch();
    const size = useWindowSize();

    useEffect(() => {
        if (size.width < 1207) {
            const col1 = []
            const col2 = []
            photo.photos.forEach((ele, idx) => {
                if (idx % 2 === 0) {
                    col1.push(ele)
                } else if (idx % 2 === 1) {
                    col2.push(ele)
                }
            });
            setPhotoCollection({ collection1: col1, collection2: col2 })
        } else {
            const col1 = []
            const col2 = []
            const col3 = []
            photo.photos.forEach((ele, idx) => {
                if (idx % 3 === 0) {
                    col1.push(ele)
                } else if (idx % 3 === 1) {
                    col2.push(ele)
                } else if (idx % 3 === 2) {
                    col3.push(ele)
                }
            });
            setPhotoCollection({ collection1: col1, collection2: col2, collection3: col3 })
        }
    }, [size.width, photo.photos])

    useEffect(() => {
        dispatch(getPhotosByTopic('nature'))
    }, [])

    return (
        <div className={styles.wrapper}>
            <div className={styles.flex}>
                <PhotoTitle />
                <PhotoCard />
            </div>
            <div className={styles.photoGrid}>
                {phototCollection && Object.keys(phototCollection).map((col, idx) => {
                    return <GridColumn key={idx} collection={phototCollection[col]} />
                })}
            </div>
        </div>
    )
}

export default PhotoContainer

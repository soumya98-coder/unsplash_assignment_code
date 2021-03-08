import React from 'react';
import IconPhotos from './IconPhotos/IconPhotos';
import styles from './PhotoCard.module.css';

import { Status, Curator, Contributions, TopContributors } from './../../../Assets/svg/svg'
import CardDataTitle from './CardDataTitle/CardDataTitle';

const PhotoCard = () => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardContent} >
                <dl className={styles.cardData}>
                    <CardDataTitle details="Status">
                        <Status />
                    </CardDataTitle>
                    <dd>
                        Open
                    </dd>

                    <div className={styles.underline}></div>

                    <CardDataTitle details="Curator">
                        <Curator />
                    </CardDataTitle>
                    <dd>
                        <a href="">
                            <img srcSet="https://images.unsplash.com/profile-1544707963613-16baf868f301?dpr=1&amp;auto=format&amp;fit=crop&amp;w=32&amp;h=32&amp;q=60&amp;crop=faces&amp;bg=fff 1x, https://images.unsplash.com/profile-1544707963613-16baf868f301?dpr=2&amp;auto=format&amp;fit=crop&amp;w=32&amp;h=32&amp;q=60&amp;crop=faces&amp;bg=fff 2x" src="https://images.unsplash.com/profile-1544707963613-16baf868f301?auto=format&amp;fit=crop&amp;w=32&amp;h=32&amp;q=60&amp;crop=faces&amp;bg=fff" width="32" height="32" role="presentation" alt="Go to Unsplash's profile" />
                        </a>
                    </dd>

                    <div className={styles.underline}></div>

                    <CardDataTitle details=" Contributions">
                        <Contributions />
                    </CardDataTitle>
                    <dd>
                        <strong>8.2k</strong>
                    </dd>

                    <div className={styles.underline}></div>

                    <CardDataTitle details="Top contributors">
                        <TopContributors />
                    </CardDataTitle>

                    <dd>
                        <ul className={styles.imageList}>

                            <IconPhotos srcSet="https://images.unsplash.com/profile-1516997253075-2a25da8007e7?dpr=1&amp;auto=format&amp;fit=crop&amp;w=16&amp;h=16&amp;q=60&amp;crop=faces&amp;bg=fff 1x, https://images.unsplash.com/profile-1516997253075-2a25da8007e7?dpr=2&amp;auto=format&amp;fit=crop&amp;w=16&amp;h=16&amp;q=60&amp;crop=faces&amp;bg=fff 2x" src="https://images.unsplash.com/profile-1516997253075-2a25da8007e7?auto=format&amp;fit=crop&amp;w=16&amp;h=16&amp;q=60&amp;crop=faces&amp;bg=fff" />
                            <IconPhotos srcSet="https://images.unsplash.com/profile-1593541755358-41ff2a4e41efimage?dpr=1&amp;auto=format&amp;fit=crop&amp;w=16&amp;h=16&amp;q=60&amp;crop=faces&amp;bg=fff 1x, https://images.unsplash.com/profile-1593541755358-41ff2a4e41efimage?dpr=2&amp;auto=format&amp;fit=crop&amp;w=16&amp;h=16&amp;q=60&amp;crop=faces&amp;bg=fff 2x" src="https://images.unsplash.com/profile-1593541755358-41ff2a4e41efimage?auto=format&amp;fit=crop&amp;w=16&amp;h=16&amp;q=60&amp;crop=faces&amp;bg=fff" />
                            <IconPhotos srcSet="https://images.unsplash.com/profile-1604758536753-68fd6f23aaf7image?dpr=1&amp;auto=format&amp;fit=crop&amp;w=16&amp;h=16&amp;q=60&amp;crop=faces&amp;bg=fff 1x, https://images.unsplash.com/profile-1604758536753-68fd6f23aaf7image?dpr=2&amp;auto=format&amp;fit=crop&amp;w=16&amp;h=16&amp;q=60&amp;crop=faces&amp;bg=fff 2x" src="https://images.unsplash.com/profile-1604758536753-68fd6f23aaf7image?auto=format&amp;fit=crop&amp;w=16&amp;h=16&amp;q=60&amp;crop=faces&amp;bg=fff" />
                            <IconPhotos srcSet="https://images.unsplash.com/profile-1598364736729-8dabcc292b82image?dpr=1&amp;auto=format&amp;fit=crop&amp;w=16&amp;h=16&amp;q=60&amp;crop=faces&amp;bg=fff 1x, https://images.unsplash.com/profile-1598364736729-8dabcc292b82image?dpr=2&amp;auto=format&amp;fit=crop&amp;w=16&amp;h=16&amp;q=60&amp;crop=faces&amp;bg=fff 2x" src="https://images.unsplash.com/profile-1598364736729-8dabcc292b82image?auto=format&amp;fit=crop&amp;w=16&amp;h=16&amp;q=60&amp;crop=faces&amp;bg=fff" />
                            <IconPhotos srcSet="https://images.unsplash.com/profile-1508107410047-a34950174b6b?dpr=1&amp;auto=format&amp;fit=crop&amp;w=16&amp;h=16&amp;q=60&amp;crop=faces&amp;bg=fff 1x, https://images.unsplash.com/profile-1508107410047-a34950174b6b?dpr=2&amp;auto=format&amp;fit=crop&amp;w=16&amp;h=16&amp;q=60&amp;crop=faces&amp;bg=fff 2x" src="https://images.unsplash.com/profile-1508107410047-a34950174b6b?auto=format&amp;fit=crop&amp;w=16&amp;h=16&amp;q=60&amp;crop=faces&amp;bg=fff" width="16" height="16" role="presentation" alt="Go to Annie Spratt's profile" />
                        </ul>
                    </dd>
                </dl>

                <div className={styles.cardFooter}>
                    <button type="button">
                        Submit to <strong>Nature</strong>
                    </button>
                    <div role="menu"></div>
                </div>
                <div>
                    <span>&nbsp;</span>
                </div>
            </div>
        </div>
    )
}

export default PhotoCard

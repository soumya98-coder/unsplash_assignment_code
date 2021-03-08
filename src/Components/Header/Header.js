import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <nav className={styles.navigation}>

            <div className={styles.logo_container}>
                <a href="#">
                    <svg version="1.1" viewBox="0 0 32 32" aria-labelledby="unsplash-home" aria-hidden="false">
                        <title id="unsplash-home">Unsplash Home</title>
                        <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
                    </svg>
                    <div className={styles.banner}>
                        <span style={{ color: '#111', fontWeight: 700 }}>Unsplash</span>
                        <span style={{
                            display: 'block', fontSize: '13px',
                            color: '#111'
                        }}>Photos for everyone</span>
                    </div>
                </a>
            </div>

            <div className={styles.input_container}>
                <form>
                    <button type="submit">
                        <svg width="20" height="20" version="1.1" viewBox="0 0 32 32" aria-hidden="false">
                            <path d="M22 20c1.2-1.6 2-3.7 2-6 0-5.5-4.5-10-10-10S4 8.5 4 14s4.5 10 10 10c2.3 0 4.3-.7 6-2l6.1 6 1.9-2-6-6zm-8 1.3c-4 0-7.3-3.3-7.3-7.3S10 6.7 14 6.7s7.3 3.3 7.3 7.3-3.3 7.3-7.3 7.3z"></path>
                        </svg>
                    </button>
                    <input placeholder="Search photos" />
                    <button>
                        <svg width="20" height="20" version="1.1" viewBox="0 0 32 32" aria-hidden="false">
                            <path d="M6.7 25.3H12V28H6.7C5.2 28 4 26.8 4 25.3V20h2.7v5.3zm0-18.6H12V4H6.7C5.2 4 4 5.2 4 6.7V12h2.7V6.7zM25.3 4H20v2.7h5.3V12H28V6.7C28 5.2 26.8 4 25.3 4zm0 21.3H20V28h5.3c1.5 0 2.7-1.2 2.7-2.7V20h-2.7v5.3zm-4-9.3c0 2.9-2.4 5.3-5.3 5.3s-5.3-2.4-5.3-5.3 2.4-5.3 5.3-5.3 5.3 2.4 5.3 5.3zm-2.6 0c0-1.5-1.2-2.7-2.7-2.7s-2.7 1.2-2.7 2.7 1.2 2.7 2.7 2.7 2.7-1.2 2.7-2.7z"></path>
                        </svg>
                    </button>
                </form>
            </div>

            <div className={styles.hamburger}>
                <svg width="24" height="24" version="1.1" viewBox="0 0 32 32" aria-hidden="false">
                    <path d="M4 21.3h24V24H4v-2.7zM4 8v2.7h24V8H4zm0 9.3h24v-2.7H4v2.7z"></path>
                </svg>
            </div>

            <div className={styles.explore_container}>
                <ul>
                    <li>
                        <a href="#">
                            <div>Brands</div>
                        </a>
                    </li>
                    <li>
                        <a href="#">Explore</a>
                    </li>
                    <li>
                        <button type="button" title="Desktop secondary nav menu button">
                            <svg width="18" height="18" version="1.1" viewBox="0 0 32 32" aria-hidden="false">
                                <path d="M7 15.5c0 1.9-1.6 3.5-3.5 3.5s-3.5-1.6-3.5-3.5 1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5zm21.5-3.5c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5zm-12.5 0c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5z"></path>
                            </svg>
                        </button>
                    </li>
                </ul>
            </div>

            <div className={styles.authentication_container}>
                <div>
                    <button className={styles.authButton} type="button">
                        Submit a photo
                    </button>
                </div>
                <div></div>
                <div>
                    <a className={styles.authButton} href="#">Login</a>
                    <a className={styles.authButton} href="#" rel="nofollow">Join Free</a>
                </div>
            </div>
        </nav>
    )
}

export default Header
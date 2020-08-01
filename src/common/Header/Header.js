import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <h1>Dims</h1>
            <nav className={styles.navMenu}>
                <ul className={styles.navMenu__list}>
                    <li className={styles.navMenu__item}><Link to='Members' className={styles.navMenu__link}>Members</Link></li>
                    <li className={styles.navMenu__item}><Link to='/tasks' className={styles.navMenu__link}>Tasks</Link></li>
                    <li className={styles.navMenu__item}><Link to='/login' className={styles.navMenu__link}>Login</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;
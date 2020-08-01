import React from 'react';
import logo from '../../common/img/logo.png'
import styles from './LoginPage.module.css'

function LoginPage() {
    return (
    <div className={styles.login__container}>
        <form className={styles.login__form}>
            <img src={logo} />
            <input type='email' placeholder='email'></input>
            <input type='text' placeholder='password'></input>
            <button>Log in</button>
        </form>      
      </div>
    )
};

export default LoginPage; 



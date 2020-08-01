import React from 'react';
import { Switch } from 'react-router-dom';
import Routes from '../Routes'; 
import styles from './Main.module.css'

function Main() {
    return (
        <div className={styles.main}>
            <Switch>
                <Routes />
            </Switch>
        </div>
    )
}
export default Main;
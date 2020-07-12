import React from 'react';
import { Switch } from 'react-router-dom';
import Routes from './Routes'; 

function Main() {
    return (
        <div className='main'>
            <Switch>
                <Routes />
            </Switch>
        </div>
    )
}
export default Main;
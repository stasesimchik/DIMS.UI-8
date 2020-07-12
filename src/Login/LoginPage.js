import React from 'react';
import logo from './logo.png'
import { Button } from 'reactstrap';

function LoginPage() {
    return (
      <div className='login-container'>
        <form className='login-form'>
            <img src={logo} />
            <input type='email' placeholder='email'></input>
            <input type='text' placeholder='password'></input>
            <Button color='success'>Log in</Button>
        </form>      
      </div>
    )
};

export default LoginPage; 



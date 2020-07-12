import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className='header'>
            <h1>Dims</h1>
            <nav className='nav-menu'>
                <ul className='nav-menu__list'>
                    <li className='nav-menu__item'><Link to='/members' className='nav-menu__link'>Members</Link></li>
                    <li className='nav-menu__item'><Link to='/tasks' className='nav-menu__link'>Tasks</Link></li>
                    <li className='nav-menu__item'><Link to='/login' className='nav-menu__link'>Login</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Link } from 'react-router-dom';
import Usefirebase from '../hooks/Usefirebase';
import './Header.css'

const Header = () => {
    const { signingoogle, user, handlesignout } = Usefirebase();
    return (
        <div className='header'>
            <nav>
                <Link to="/">Home</Link>

                <Link to="/products">Products</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/Register">Register</Link>
                <span>{user?.displayName && user.displayName}</span>

                {
                    user?.uid ? <button onClick={handlesignout}>signout</button> : <Link to="/Login">Login</Link>
                }

            </nav>


        </div>
    );
};

export default Header;
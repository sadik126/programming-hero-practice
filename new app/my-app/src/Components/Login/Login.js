import React from 'react';
import Usefirebase from '../hooks/Usefirebase';

const Login = () => {
    const { signingoogle } = Usefirebase();
    return (
        <div>
            <h1>Login Here</h1>
            <form>
                <input type="email" placeholder='enter your email' />
                <br />
                <input type="password" placeholder='enter your password' />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default Login;
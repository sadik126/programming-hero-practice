import React from 'react';
import Usefirebase from '../hooks/Usefirebase';

const Home = () => {
    const { user } = Usefirebase();
    return (
        <div>
            <h1>this is home page</h1>
            <p>Current user is : {user ? user.displayName : "please login"}</p>
        </div>
    );
};

export default Home;
import React from 'react';
import Usefirebase from '../hooks/Usefirebase';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../../firbase.init';

const Register = () => {
    const auth = getAuth(app)
    const [SignInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
    // const { signingoogle } = Usefirebase();
    return (
        <div>
            <h1>Please register here</h1>
            <br />
            <button onClick={() => SignInWithGoogle()}>Google login</button>
            <br />
            <br />
            <form>
                <input type="text" name="" id="" placeholder='enter your name' />
                <br />
                <input type="email" placeholder='enter your email' />
                <br />
                <input type="password" placeholder='enter your password' />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default Register;
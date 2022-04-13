import React from 'react';

const Register = () => {
    return (
        <div>
            <h1>Please register here</h1>
            <br />
            <button>Google login</button>
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
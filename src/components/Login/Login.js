import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase();
    return (
        <div>
            <h2>Please Login to Continue</h2>
            <div style={{ margin: '20px' }}>
                <button onClick={signInWithGoogle}>Google Sign in</button>
            </div>
            <form>
                <input type="email" placeholder='Enter Your Email' />
                <br />
                <input type="password" placeholder='Password' name="" id="" />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;
import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import app from '../../firebase.init';

const auth = getAuth(app)
const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth)
    return (
        <div>
            <h2>Please Login to Continue</h2>
            <div style={{ margin: '20px' }}>
                <button onClick={() => signInWithGoogle()}>Google Sign in</button>
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
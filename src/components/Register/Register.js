import React from 'react';

const Register = () => {
    return (
        <div>
            <h2>Register Now</h2>
            <form>
                <input type="text" placeholder='Your Name' />
                <br />
                <input type="email" placeholder='Enter Your Email' />
                <br />
                <input type="password" placeholder='Password' name="" id="" />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;
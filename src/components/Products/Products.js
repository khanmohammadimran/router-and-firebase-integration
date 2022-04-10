import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app)
const Products = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <h3>Knock Knock!! Who's there?</h3>
            <h2>{user ? user.displayName : 'I am Ghoooost'}</h2>
        </div>
    );
};

export default Products;
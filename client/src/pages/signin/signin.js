import React from 'react';
import {Link} from 'react-router-dom';

const SignIn = () => {
    return (
        <div>
            Sign in page
            <Link to="/dashboard">Dashboard</Link>
        </div>
    );
}

export default SignIn;
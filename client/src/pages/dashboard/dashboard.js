import React from 'react';
import {Link} from 'react-router-dom'

const Dashboard = () => {
    return (
        <div>
            Dashboard page
            <Link to="/">Got to sign up</Link>
        </div>
    );
}

export default Dashboard;
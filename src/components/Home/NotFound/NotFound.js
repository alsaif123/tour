import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <>
            <div className="notfound">
            <h1><button className="btn btn-primary"><Link to='/home'><span className='text-dark'>Go Back Home</span></Link> </button></h1>
        </div>
        </>
    );
};

export default NotFound;
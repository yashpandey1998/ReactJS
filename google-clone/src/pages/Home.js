import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';


export default function Home() {
    return (
        <div>
            <h1>This is the Home Page in google clone!!</h1>

            <div>
                <Link to='/about'> About</Link>
            </div>
        </div>
    );
}
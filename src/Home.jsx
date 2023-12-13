import React from 'react'
import ReactDOM from 'react-dom/client'
import homebg from './assets/home.png';
import { Link } from "react-router-dom";

export const Home = ()=>{
    return (
        <div className="home-container">
            <h1>You got the travel plans, we got the travel Cars.</h1>
            <p>Add adventure to your life by joining the #carlife movement. Rent the perfect van to make your perfect road trip.</p>
            <Link to="vans">Find your Car</Link>
        </div>
    )
}


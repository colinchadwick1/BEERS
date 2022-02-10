import React from 'react'
import { Link } from 'react-router-dom'
import BeersImage from "../assets/beers.png"
import randomBeersImage from "../assets/random-beer.png"
import newBeerImage from "../assets/new-beer.png"

export default function HomePage() {
    return (
        <>
            <h1>BEERS</h1>
        <div className="home">
            <Link to="/beers">
                <div className="card" >
                <img className="thumbnail"src={BeersImage} alt="all-beers"/><strong>All beers</strong></div></Link>
            <Link to="/random-beer"><div className="card"><img className="thumbnail" src={randomBeersImage} alt=""/><strong>Random beer</strong></div></Link>
            <Link to="/new-beer"><div className="card"><img className="thumbnail" src={newBeerImage} alt=""/><strong>Add a beer</strong></div></Link>

        </div>
        
        </>

    )
}

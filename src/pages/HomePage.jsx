import React from 'react'
import { Link } from 'react-router-dom'
import BeersImage from "../assets/beers.png"
import randomBeersImage from "../assets/random-beer.png"
import newBeerImage from "../assets/new-beer.png"

export default function HomePage() {
    return (
        <div>
            <div class="thumbnail">
            <Link to="/beers"><img src={BeersImage} alt=""/>Beers</Link>
            </div>
            <Link to="/random-beer"><img src={randomBeersImage} alt=""/>Random beer</Link>
            <Link to="/new-beer"><img src={newBeerImage} alt=""/>new beer</Link>

        </div>
    )
}

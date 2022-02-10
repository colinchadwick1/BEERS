import React from 'react'
import { Link } from 'react-router-dom'
import Beer from '../assets/beer.png'

export default function Header() {
    return (
        <div>
                        <Link to={"/"}><img className="icon"src={Beer} alt="beer"/></Link>

        </div>
    )
}

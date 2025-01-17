import Header from '../components/Header'
import React from 'react'
import axios from 'axios';
 import { useEffect, useState } from 'react';


export default function RandomBeer() {
    const [beers, setBeers] = useState([]);



    useEffect(() => {
        axios
          .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
          .then((response) => {
            setBeers(response.data);
          })
          .catch(console.log);
      }, []);


    return (
      <>
            <Header/>
      <div className="container">
            <img className="detail-img" src={beers.image_url} alt=""/>
            
            <div>
            <h3 className="card-title">{beers.name}</h3>
            <p className="card-text">{beers.tagline}</p>
            <p className="card-text"><strong>First brewed:</strong> {beers.first_brewed}</p>
            <p className="card-text"><strong>Attentuation level: </strong>  {beers.attenuation_level}</p>
            <p className="card-text"><strong> Description:</strong>  {beers.description}</p>
            <p><strong>Contributed by: </strong> {beers.contributed_by}</p>
            </div>
        </div>
        </>
    )
}

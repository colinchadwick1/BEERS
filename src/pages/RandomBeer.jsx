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
            console.log('response.data', response.data);
            setBeers(response.data);
          })
          .catch(console.log);
      }, []);


    return (
        <div>
            <Header/>
            <h2>{beers.name}</h2>
            <p><img src={beers.image_url} alt=""/></p>
            <p>{beers.tagline}</p>
            <p>{beers.first_brewed}</p>
            <p>{beers.attenuation_level}</p>
            <p>{beers.description}</p>
            <p>{beers.contributed_by}</p>





        </div>
    )
}

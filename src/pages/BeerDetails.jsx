import { useParams } from 'react-router';
import axios from 'axios';
import { useEffect, useState } from 'react';

import React from 'react';

export default function BeerDetails() {
  const [beers, setBeers] = useState([]);
  const { id: beerId } = useParams();
  

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        console.log('response.data', response.data);
        setBeers(response.data);
      })
      .catch(console.log);
  }, []);

  return (
    <div>
      <h2>{beers.name}</h2>
      <p><img src={beers.image_url} alt=""/></p>
      <p>{beers.tagline}</p>
      <p>{beers.first_brewed}</p>
      <p>{beers.attenuation_level}</p>
      <p>{beers.description}</p>
      <p>{beers.contributed_by}</p>




      
    </div>
  );
}

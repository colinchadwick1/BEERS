import React from 'react';
import Header from '../components/Header';
import axios from "axios"
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import Search from '../components/Search';


function Beers() {
const [beers, setBeers] = useState([]);
const [filteredBeers, setFilteredBeers] = useState([]);

const { id: beerId } = useParams();



    useEffect(() => {
        axios
          .get("https://ih-beers-api2.herokuapp.com/beers")
          .then((response) => {
            console.log("response.data", response.data);
            setBeers(response.data);
            setFilteredBeers(response.data);


          })
          .catch(console.log);
      }, []);

      function handleFilterBeer(string) {
        if (string === "") {
          setFilteredBeers(beers);
        } else {
            setFilteredBeers(
            beers.filter((beer) =>
              beer.name.toLowerCase().includes(string.toLowerCase())
            )
          );
        }
      }


  return (
    <div>
      <Header />
      <Search filterFood={handleFilterBeer}/>

      <p>BEERS</p>
      <div>
      <h3>List of Beers</h3>

      {filteredBeers.map((beer) => (
        <div key={beer._id} className="card">
          <img src={beer.image_url} alt="beer" />
          <h3>{beer.name}</h3>
          <p> {beer.tagline}</p>
          <p>{beer.contributed_by}</p>
          <Link to={`/beers/${beer._id}`}>Find out more:</Link>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Beers

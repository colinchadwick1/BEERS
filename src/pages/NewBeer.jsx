import Header from '../components/Header'
import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import { useState } from 'react'

export default function NewBeer() {
    const [formState, setFormState] = useState({})


    const history = useHistory()



    function handleSubmit(e){
        e.preventDefault()

        axios
        .post("https://ih-beers-api2.herokuapp.com/beers/new",
        formState)
        .then(respnse =>{
            setFormState({})
            history.push("/")
        }
        )
        .catch(console.log)

    }

    function handleInput(e){
        setFormState({...formState, [e.target.name]: e.target.value}) // setFormState(Object.assign{}, state, {[e.name]: e.value}))
        
            }
    return(
        <div className="NewBeerPage">
        <Header/>
        <h3>Add a beer</h3>
        
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={handleInput}         //onChange={(e) => setHeadline(e.target.value)}
            value={formState.headline}
          />
    
          <label>Tagline</label>
          <input
            type="text"
            name="tagline"
             onChange={handleInput}                               // onChange={(e) => setPrice(e.target.value)}
            value={formState.price}
          />

            <label>description</label>
          <input
            type="text"
            name="description"
             onChange={handleInput}                               // onChange={(e) => setPrice(e.target.value)}
            value={formState.price}
          />
           <label>First brewed</label>
          <input
            type="text"
            name="first_brewed"
             onChange={handleInput}                               // onChange={(e) => setPrice(e.target.value)}
            value={formState.price}
          />

        <label>Brewers tips</label>
          <input
            type="text"
            name="brewers_tips"
             onChange={handleInput}                               // onChange={(e) => setPrice(e.target.value)}
            value={formState.price}
          />

        <label>Attenuation_level</label>
          <input
            type="number"
            name="attenuation_level"
             onChange={handleInput}                               // onChange={(e) => setPrice(e.target.value)}
            value={formState.price}
          />

        <label>Contributed by </label>
          <input
            type="text"
            name="contributed_by"
             onChange={handleInput}                               // onChange={(e) => setPrice(e.target.value)}
            value={formState.price}
          />
          
          <button type="submit">Create Beer</button>
          
        </form>
      </div>
        )
}

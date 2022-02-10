import { useState } from "react";
import React from "react";

export default function Search(props){
    const [string, setString] = useState("")

    function handleSearch(event){
        setString(event.target.value);
        props.filterFood(event.target.value)

    }

    return(
        <div>
            <label className="search"for="search">Search </label>
            <input type="text" value={string} name="search" onChange={handleSearch}/>
        </div>
    )

}
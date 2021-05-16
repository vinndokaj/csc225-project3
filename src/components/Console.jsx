import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Console({ id }) {
    const [con, setConsole] = useState(null);

    useEffect(() => {   
        axios.get(`http://csc225.mockable.io/consoles/${id}`)
        .then((response) => {
            setConsole(response.data);
        })
    }, [id]);

    if(!con){
        return (
            <p>Getting your console info!</p>
        )
    }

    return (
        <div>
            {con.id} 
            {con.name}
            {con.country}
            {con.price}
            {con.releaseYear}
            <img src={con.image} alt={con.name} />
        </div>
    )
}

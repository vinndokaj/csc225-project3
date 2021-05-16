import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Console from './Console';

export default function Consoles() {
    const [consoles, setConsoles] = useState([]);
    const [consoleID, setConsoleID] = useState(null);

    useEffect(() => {   
        axios.get('http://csc225.mockable.io/consoles')
        .then((response) => {
            setConsoles(response.data);
        })
    }, []);

    if(consoles.length === 0) {
        return (
            <div>
                Loading
            </div>
        )
    }

    if(!!consoleID){
        return (
            <>
                <button onClick={() => setConsoleID(null)}>Go back</button>
                <Console id={consoleID} />
            </>
        )
    }

    return (
        <div>
            {consoles.map((c) => {
                return (
                    <p key={c.id}>
                        {c.name}
                        <img src={c.image} alt={c.name} />
                        <button onClick={() => setConsoleID(c.id)}>go to console</button>
                    </p>
                )
            })}
        </div>
    )
}

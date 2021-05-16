import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Console from './Console';

export default function Consoles() {
    const [consoles, setConsoles] = useState([]);
    const [consoleID, setConsoleID] = useState(null);

    const resetConsoleID = () => setConsoleID(null);

    useEffect(() => {   
        axios.get('http://csc225.mockable.io/consoles')
        .then((response) => {
            setConsoles(response.data);
        })
    }, []);

    if(consoles.length === 0) {
        return (
            <div className="text-center">
                <div className="spinner-border text-danger" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    if(!!consoleID){
        return (
            <Console id={consoleID} goBack={resetConsoleID}/>
        )
    }

    return (
        <>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
                {consoles.map((c) => {
                    return (
                        <div className="col mb-2" key={c.id}>
                            <div className="card">
                                <div className="card-header">
                                    {c.name}
                                </div>
                                <img src={c.image} className="card-img-top p-1" alt={c.name} />
                                <div className="card-body d-grid">
                                    <button onClick={()=> setConsoleID(c.id)} className="btn btn-outline-dark">More Info</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

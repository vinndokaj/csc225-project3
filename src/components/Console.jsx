import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Console({ id, goBack }) {
    const [con, setConsole] = useState(null);

    useEffect(() => {   
        axios.get(`http://csc225.mockable.io/consoles/${id}`)
        .then((response) => {
            setConsole(response.data);
        })
    }, [id]);

    if(!con){
        return (
            <div className="text-center">
                <div className="spinner-border text-danger" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    return (
        <div className='row mb-2 text-center'>
            <div className='col d-inline-flex justify-content-center'>
                <div className="card">
                    <img src={con.image} className="card-img-top border border-5" alt={con.name} />
                    <div className="card-body">
                        <h5 className="card-title">{con.name}</h5>
                        <p className="card-text">${con.price}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Developed in {con.country}</li>
                        <li className="list-group-item">Released in {con.releaseYear}</li>
                    </ul>
                    <div className="card-body d-grid">
                        <button onClick={() => {goBack()}} className="btn btn-outline-warning">Back to main page</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

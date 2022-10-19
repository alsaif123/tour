import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Place from '../Place/Place';
import './Places.css';

const Places = () => {

    const [places,setPlaces] = useState([])
     useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setPlaces(data));

     },[])
    return (
        <div className="container">
            <h2 className='text-primary mt-5 text-center'>This is Our Places</h2>
            <div className="row">
                {
                    places.map(place =>
                        <Place
                        place = {place}
                        >

                        </Place>
                        )
                }
            </div>
        </div>
    );
};

export default Places;
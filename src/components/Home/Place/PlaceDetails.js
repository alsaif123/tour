 import React , { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './PlaceDetails.css'

const PlaceDetails = () => {
    const {id} = useParams();
    // console.log(serviceId)
    const [service, setService] = useState({})
    
    useEffect(()=>{
        fetch(`http://localhost:5000/services/${id}`)
        .then(res => res.json())
        .then(data =>setService(data));
    },[])
    return (
       <div className="placedetails">
         <div className='container pb-5 pt-5'>
             <Card>
        <Card.Img className='mx-auto m-10 pt-10' variant="top" src={service.img} 
        style= {{
            height : "600px",
            padding : '10px'
        }}
        />
        <Card.Body>
          <Card.Title><h2 className='text-dark'>{service.Name}</h2></Card.Title>
          <Card.Text>
            {service.description}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <h3>Tour Cost : {service.Cost} TAKA</h3>
        </Card.Footer>
      </Card>
           
        </div>
       </div>
    );
};

export default PlaceDetails;
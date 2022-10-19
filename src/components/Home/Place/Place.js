import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Place.css';


const Place = ({place}) => {
  const {img, Name, description,Cost,_id} = place;
    return (
        <div className="col-md-4" >
            
            <Card className=" g-5 mx-3 mb-5">
        <Card.Img variant="top" src={img} style={
          {
            height:"300px"
            
            ,padding:"10px",borderRadius:"10px"
          }
        }/>
        <Card.Body>
          <Card.Title><h2>{Name}</h2></Card.Title>
          <Card.Text>
           {description.slice(0,250)}
          </Card.Text>
          <h3 className='text-dark pt-2'>Cost Amout : {Cost}TK</h3>
        </Card.Body>
        <Card.Footer>
        <Link to={`/placeDetails/${_id}`} class="btn btn-primary text-dark">Details</Link>
          
        </Card.Footer>
      </Card>
      


        </div>
    );
};

export default Place;
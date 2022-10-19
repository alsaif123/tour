import React from "react";
import { Carousel } from "react-bootstrap";
import "./Frontpage.css";
 

const Frontpage = () => {
  return (
 
 <Carousel>
        <Carousel.Item>
          <img
            style={{
              height: "90vh",
              width: "100%",
              overflow:"hidden"

            }}
            className="img-fluid"
            src="https://i.ibb.co/Vj1Dwcq/pexels-baskin-creative-studios-1766838.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{
              height: "90vh",
              width: "100%",
              overflow:"hidden"

            }}
            className="img-fluid"
            src="https://i.ibb.co/2k7MgXK/pexels-snapwire-34950.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
    
        <Carousel.Item>
          <img
            style={{
              height: "90vh",
              width: "100%",
              overflow:"hidden"

            }}
            className="img-fluid"
            src="https://i.ibb.co/xLKwQ7n/pexels-pixabay-38537.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>  
  
 
)};

export default Frontpage;

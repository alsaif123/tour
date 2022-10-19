import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logout } = useAuth();
  const email = user.email;

  return (
    <>
      <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link
            className="text-white px-3"
            style={{ textDecoration: "none" }}
            to="/home"
          >
            <h4>TOUR</h4>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Link
                className="text-white px-3"
                style={{ textDecoration: "none" }}
                to="/home"
              >
                HOME
              </Link>
              
              <Link
                className="text-white px-3"
                style={{ textDecoration: "none" }}
                to="/places"
              >
                SPOTS
              </Link>
              <Link
                className="text-white px-3"
                style={{ textDecoration: "none" }}
                to="/booking"
              >
                BOOKING
              </Link>
              <Link
                className="text-white px-3"
                style={{ textDecoration: "none" }}
                to="/aboutus"
              >
                ABOUT US
              </Link>
              <Link
                className="text-white px-3"
                style={{ textDecoration: "none" }}
                to="/dashboard"
              >
                DASHBOARD
              </Link>
              <span className="p-1">{user.displayName}</span>
              <span></span>
              <img
                    src= {user.photoURL}
                    alt={user.displayName}
                    height="40px"
                    style={{borderRadius:"50%",
                            marginLeft:"5px"
                          
                  }}
                  />
                  
              {
                user.email ?
                
                <button style={{
                  marginLeft:"10px",
                  borderRadius:"10px"
                }} className="btn-danger p-1" onClick={logout}>Logout</button> 
                :
                <button style={{ borderRadius:"10px"
                }}><Link
                className=" px-3"
                style={{ textDecoration: "none"
                      }} to="/login">Login</Link></button>
              }
              {/* {!email && (
                <Link
                  className="text-white px-3"
                  style={{ textDecoration: "none" }}
                  to="/login"
                >
                  <button
                    variant="outline-primary"
                    className="mx-3 nav-signin-button button5"
                  >
                    Sign In
                  </button>
                </Link>
              )}
              {email && (
                <>
                  <p>{user.displayName}</p>
                  <img
                    src={user.photoURL}
                    alt={user.displayName}
                    height="48px"
                    style={{borderRadius:"50%"}}
                  />
                  
                </>
              )}
              {email && (
             
                <button
                    variant="outline-primary"
                    className="mx-3 nav-signin-button button5"
                    
                  >
                    Sign out
                  </button>
                  
                
              )} */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

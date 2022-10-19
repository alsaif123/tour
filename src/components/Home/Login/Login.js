import React from "react";
import { useLocation , useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";


import "./Login.css";

const Login = () => {
const { signInUsingGoogle} = useAuth();
const location = useLocation();
//const history = useHistory();
const { from } = location.state || { from: { pathname: "/" } };
 
  return (
    <>
      <div class="container main-block mt-5 mb-5">
        <div class="block-item left">
          <h1>Sign up with:</h1>
          <p>
            <small>
              W3docs provides free learning materials for programming languages
              like HTML, CSS, Java Script, PHP etc.
            </small>
          </p>
        </div>
        <div onClick={signInUsingGoogle} class="block-item right">
          <button class="btn google" data-provider="google">
            <i class="fab fa-google"></i>
            <span>Google</span>
          </button>
          <button class="btn facebook" data-provider="facebook">
            <i class="fab fa-facebook-f"></i>
            <span>Facebook</span>
          </button>
          <button class="btn twitter" data-provider="twitter">
            <i class="fab fa-twitter"></i>
            <span>Twitter</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;

import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import logo from "../assets/flamelogo.png";
import '../index.css';
import "firebase/app";
import { auth } from "../firebase";
import firebase from "firebase/app";

const Login = () => {
  return (
    <div id="login-page">
      <div id="login-card">
        <h1 style={{ fontFamily: "Cubano", fontWeight: "500" }}>
          <img src={logo} id="logo" alt="logo" draggable="false" />
          Flame Chat
        </h1>
        <p id="login-with">Login With</p>
        <div
          className="login-button google"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <FcGoogle />
        </div>
        <br /> <br />
        <div
          className="login-button facebook"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())
          }
        >
          <FaFacebookF />
        </div>
      </div>
    </div>
  );
};

export default Login;

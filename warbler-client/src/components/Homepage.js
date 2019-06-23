import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => (
  <div className="home-hero">
    <h1>What's Happening?</h1>
    <h4>New to Warbler?</h4>    
    <Link to="/signup" className="btn btn-primary">Sign up here</Link>
    <div className="signature">
      <h6>Built using React, Redux, Node, Express, MongoDB</h6>
      <h6>Designed and Maintained by deepaligarg1001@gmail.com</h6>
    </div>
  </div>
);

export default Homepage;
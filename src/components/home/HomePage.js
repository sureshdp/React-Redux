import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>React-Redux Learning</h1>
    <p>React,Redux and React Router for ultra responsice web app.</p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn more
    </Link>
  </div>
);
export default HomePage;

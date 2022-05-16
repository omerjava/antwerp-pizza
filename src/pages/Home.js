import React from "react";
import "../styles/Home.css";
import {Link} from "react-router-dom";
import BannerImage from "../assets/pizza.jpg";


function Home() {
  return (
    <div className="home">
      <div className="headerContainer" style={{backgroundImage: `url(${BannerImage})`}}>
          <div className="wrapper">
          <h1>Antwerp Pizza</h1>
          <p>PIZZA FOR EVERYBODY</p>
          <Link to="/menu" >
            <button>ORDER NOW</button>
          </Link>
          </div>
      </div>
    </div>
  );
}

export default Home;

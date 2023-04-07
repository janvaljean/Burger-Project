import React from "react";
import "../styles/Home.css";
import BannerImage from "../assets/banneryeni.jpg"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{ backgroundImage: `url(${BannerImage})` }}
      className="mainPage"
    >
      <div className="order">
        <Link to="/menu">
          <button>Make an Order</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

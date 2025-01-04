import React from "react";
import "./Body.css";
import image from "./ImageSlider"
import ImageSlider from "./ImageSlider";

function App() {
  return (
   
    <div className="app-container">
      <header className="header">
        <h1>Discover the Perfect Paper for Every Project</h1>
        <p>
          Welcome to our paper company, where quality meets creativity. Explore
          our diverse range of premium paper products designed to elevate your
          projects.
        </p>
        {/* for button 
         */}
        {/* <div className="button-group">
          <button className="shop-btn">Shop</button>
          <button className="learn-btn">Learn More</button>
        </div> */}
      </header>
      <ImageSlider/>
    </div>
  );
}

export default App;

import React from "react";
import coffee from "../assets/img1.jpg";

function Home() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>Coffee: More Than Just a Drink</h1>
        <p>
          Coffee is more than just a beverage; it is a ritual, a culture, and
          a companion to billions of people across the globe. From the early
          morning cup that clears the fog of sleep to the late-night brew that
          fuels creativity…
        </p>
      </div>
      <div className="hero-image">
        <img src={coffee} alt="coffee" />
      </div>
    </div>
  );
}

export default Home;

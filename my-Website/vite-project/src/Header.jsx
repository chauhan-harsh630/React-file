import "./App.css";
import coffee from "./assets/img1.jpg";
import { Link } from "react-router-dom";
import Home from "./component/Home";

function Header() {
  return (
    <>
      <div className="container">
        <h1>Coffee Blog</h1>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/product">Product</Link>
      </div>

      <div className="hero">
        <div className="hero-text">
                  <h1>Coffee: More Than Just a Drink </h1>
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
    </>
  );
}

export default Header;

import React, { useState, useEffect } from "react";
import './home.css';
import { Link } from "react-router-dom";


const Home = () => {
  const featuredCars = [
    { id: 1, name: "Maruti Suzuki Swift", price: "5.99 Lakh", image: "./images/swift/SUZUKI_SWIFT_EXT_360_RED_V-1_5.webp" },
    { id: 2, name: "Hyundai Creta", price: "10.87 Lakh", image: "./images/creta/abyss-black_5.png" },
    { id: 3, name: "Tata Nexon", price: "8.15 Lakh", image: "./images/nexon/PureGrey-0.png" },
    { id: 4, name: "Suzuki Ertiga", price: "9.50 Lakh", image: "./images/ertiga/ertiga.png" },
    { id: 5, name: "Renault Kwid", price: "3.50 Lakh", image: "./images/renault/renault.png" },
    { id: 6, name: "Toyota Innova", price: "17.50 Lakh", image: "https://www.jansatta.com/wp-content/uploads/2019/03/toyota-innova-crysta-small-2.jpg?w=440" },
  ];

  const offers = [
    {
      id: 1,
      title: "No Cost EMI",
      description: "Plus ₹8000 cashback on selected models",
      image: require('../Assets/emi.png'),
    },
    {
      id: 2,
      title: "Best Maintainance Service",
      description: "Authorized and geniune service centre accross country",
      image: require('../Assets/service.png'),
    },
    {
      id: 3,
      title: "24*7 Connect",
      description: "For support our team always be ready for you help 😊",
      image: require('../Assets/247.png'),
    }
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prev) => (prev + 3) % featuredCars.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 3 + featuredCars.length) % featuredCars.length);
  };

  const visibleCars = [
    featuredCars[startIndex],
    featuredCars[(startIndex + 1) % featuredCars.length],
    featuredCars[(startIndex + 2) % featuredCars.length],
  ];

  //word auto typing 
  const typingWords = ["To Automobile", "To Revolution", "To Dream Drive"];
  const [currentWord, setCurrentWord] = useState(0);

  const carRouteMap = {
    "Maruti Suzuki Swift": "/swift",
    "Hyundai Creta": "/creta",
    "Tata Nexon": "/nexon",
    "Suzuki Ertiga": "/ertiga",
    "Renault Kwid": "/omni",
    "Toyota Innova": "/innova",
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % typingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [typingWords.length]);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="backgroundimage">
        <section className="naming">
          <h1>HATTRICK CARNIVAL LIVE NOW</h1>
          <div className="typing">{typingWords[currentWord]}</div>
        </section>
      </div>

      <section className="hero">
        <h1>Welcome to CarDeck TrueValue</h1>
        <p>Your ultimate destination to explore cars, compare features, and find your dream ride.</p>
        {/* <a href="/cars" className="explore-btn">Explore Cars</a> */}
      </section>

      {/* Featured Cars Section */}
      <div className="featured-cars">
        <h2>🔥 Featured Cars</h2>
        <div className="carousel-wrapper">
          <button className="nav-btn left" onClick={handlePrev}>❮</button>
          <div className="car-grid">
            {visibleCars.map((car) => (
              <div key={car.id} className="car-cardbox">
                <img className="img" src={car.image} alt={car.name} />
                <h3>{car.name}</h3>
                <p>Price: ₹{car.price}<sup>*</sup> </p>
                <br />
                <Link to={carRouteMap[car.name]} className="view-btn">
                  View {car.name}
                </Link>

              </div>
            ))}
          </div>
          <button className="nav-btn right" onClick={handleNext}>❯</button>
        </div>
      </div>

      {/* Hot Deals Section */}
      <div className="deals">
        <h2>💥 Hot Deals</h2>
        <ul >
          <li>Up to 15% off on SUVs</li>
          <li>No-cost EMI for 12 months</li>
          <li>Free insurance for the first year</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="cta">
        <h2>Ready to find your dream car?</h2>
        <a href="/cardetails" className="explore-btn">Explore Car List</a>
      </div>

      <section className="intro">
        <p className="cl1"> Different things.</p><p className="cl2"> Even more reason to Search</p>
      </section>

      {/* Offers*/}
      <div className="offers-grid">
        {offers.map((offer) => (
          <div className="offer-card" key={offer.id}>
            <img className="img" src={offer.image} alt={offer.title} />
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

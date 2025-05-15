// src/component/cardetails/InnovaDetail.jsx
import React, { useState, useRef } from "react";
import './Details.css';
import './temp.css';

const ToyotaInnovaDetail = () => {
  const car = {
    name: "Innova",
    price: "₹18.25 – ₹25.71 Lakh",
    mileage: "11.7 – 15.0 km/l",
    width: "1830 mm",
    height: "1795 mm",
    image:
      "https://www.jansatta.com/wp-content/uploads/2019/03/toyota-innova-crysta-small-2.jpg?w=440",
    description:
      "Toyota Innova Crysta is a premium MPV that offers superior comfort, advanced safety features, and a refined driving experience. Known for its reliability and practicality, it is an excellent choice for large families and long-distance travel.",
    details: {
      engine: {
        petrol: "2.7L 4-cylinder (166 PS, 245 Nm)",
        diesel: "2.4L 4-cylinder (150 PS, 343 Nm)",
      },
      transmission: "5MT / 6AT",
      fuelOptions: "Petrol & Diesel",
      safetyRating: "4 Stars (Global NCAP)",
      features: [
        "7” Touchscreen Infotainment",
        "Apple CarPlay & Android Auto",
        "LED Projector Headlamps",
        "Front & Rear Parking Sensors",
        "Upgraded 9 Speaker Sound System",
      ],
      colorOptions: [
        { name: "Super White", hex: "#fefefe" },
        { name: "Attitude Black", hex: "#0c0c0c" },
        { name: "Avant-Garde Bronze", hex: "#6e5849" },
        { name: "Platinum White Pearl", hex: "#f4f5f7" },
        { name: "Silver Metallic", hex: "#c8c8c8" },
        { name: "Sparkling Black Crystal Shine", hex: "#1c1c1c" },
        // "Platinum White Pearl",
        // "Silver Metallic",
        // "Attitude Black",
        // "Avant Garde Bronze",
        // "Super White",
      ],
      segment: "Premium MPV",
      launched: "First: 2005, Facelift: 2021",
      evAvailable: false,
    },
  };
  //360 VIEW 
  const totalImages = 17;
  const [currentIndex, setCurrentIndex] = useState(1);
  const isDragging = useRef(false);
  const startX = useRef(0);
  //For Desktop
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;

    const delta = e.clientX - startX.current;

    if (Math.abs(delta) > 5) {
      setCurrentIndex((prev) => {
        let newIndex = prev + (delta > 0 ? -1 : 1);
        if (newIndex < 1) newIndex = totalImages;
        if (newIndex > totalImages) newIndex = 1;
        return newIndex;
      });
      startX.current = e.clientX;
    }
  };
  //For Mobile
  const handleTouchStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const delta = e.touches[0].clientX - startX.current;

    if (Math.abs(delta) > 15) { //5
      setCurrentIndex((prev) => {
        let newIndex = prev + (delta > 0 ? -1 : 1);
        if (newIndex < 1) newIndex = totalImages;
        if (newIndex > totalImages) newIndex = 1;
        return newIndex;
      });
      startX.current = e.touches[0].clientX;
    }
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  return (
    <div className="ak">
      {/* <div className="embed-section">
        <h3>Explore Toyota Innova Crysta</h3>
        <p>
          <a
            href="https://www.toyotabharat.com/virtual-showroom/innovacrysta.html"
            target="_blank"
            rel="noopener noreferrer"
            className="visit-link"
          >
            Visit Toyota Virtual Showroom 🔗
          </a>
        </p>
      </div> */}
      <div className="center-button">
        <button
          onClick={() => window.location.href = "https://www.toyotabharat.com/virtual-showroom/innovacrysta.html"}
          className="visit-toyota"
        >
          View Innova Crysta in 3D Virtual Reality
        </button>
      </div>

      <div className="swiftbox">
        <div className="vr-360-exterior">
          <div className="section-inner">
            <div className="titArea pvreTitArea">
              <h3 className="subTitM alignC">360° Experience</h3>
              <div className="conAreaM alignC">
                Click and turn the vehicle image to the left or right.
              </div>
            </div>
            <div className="experiencePanoramaBox exterior">
              <div
                className="panorama loadingEnd"
                style={{
                  position: "relative",
                  margin: "0px auto",
                  padding: "0px",
                  height: "425px",
                  width: "1120px",
                  overflow: "hidden",
                  cursor: "grab",
                }}
                //for desktop
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onMouseMove={handleMouseMove}
                //for mobile
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}

              >
                {[...Array(totalImages)].map((_, i) => {
                  const index = i + 1;
                  return (
                    <img
                      key={index}
                      className={`panoVues vue${index}`}
                      // src={`/images/creta/abyss-black_${index}.png`} // ✅ Now correct
                      src={`/images/innova/img_0_0_${index}.png`}
                      style={{
                        visibility: index === currentIndex ? "visible" : "hidden",
                        position: "absolute",
                        top: 0,
                        left: 0,
                      }}
                      width="1120"
                      height="425"
                      // width="560"
                      // height="212 "
                      alt={`nexon-view-${index}`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DETAILS */}
      <div className="car-detail" style={{ padding: "2rem", fontFamily: "sans-serif" }}>
        <h1>{car.name}</h1>
        {/* <img src={car.image} alt={car.name} style={{ width: "300px" }} /> */}
        <p><strong>Price:</strong> {car.price}</p>
        <p><strong>Mileage:</strong> {car.mileage}</p>
        <p><strong>Width:</strong> {car.width}</p>
        <p><strong>Height:</strong> {car.height}</p>
        <p>{car.description}</p>

        <h2>Specifications</h2>
        <p><strong>Engine (Petrol):</strong> {car.details.engine.petrol}</p>
        <p><strong>Engine (Diesel):</strong> {car.details.engine.diesel}</p>
        <p><strong>Transmission:</strong> {car.details.transmission}</p>
        <p><strong>Fuel:</strong> {car.details.fuelOptions}</p>
        <p><strong>Safety Rating:</strong> {car.details.safetyRating}</p>
        <p><strong>Segment:</strong> {car.details.segment}</p>
        <p><strong>Launched:</strong> {car.details.launched}</p>
        <p><strong>EV Variant Available:</strong> {car.details.evAvailable ? "Yes" : "No"}</p>

        <h3>Key Features</h3>
        <ul>
          {car.details.features.map((feature, index) => (
            <li key={index}>✅ {feature}</li>
          ))}
        </ul>

        <h3>Available Colors</h3>
        <div className="hexx" style={{ display: "flex", gap: "2.0rem", flexWrap: "wrap", marginTop: "1rem" }}>
          {car.details.colorOptions.map((c, index) => (
            <div key={index} style={{ textAlign: "center" }}>
              <ul>
                <div
                  style={{
                    backgroundColor: c.hex,
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    border: "1px solid #ccc",
                    marginBottom: "0.5rem",
                  }}
                ></div>
              </ul>
              <small>{c.name}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToyotaInnovaDetail;

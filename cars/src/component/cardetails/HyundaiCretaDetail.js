// src/component/cardetails/CretaDetail.jsx
import React, { useState, useRef } from "react";
import './Details.css';
import './temp.css';

const HyundaiCretaDetail = () => {
  const car = {
    name: "Creta",
    price: "₹11.00 – ₹20.15 Lakh",
    mileage: "17.4 – 21.8 km/l",
    width: "1790 mm",
    height: "1635 mm",
    image:
      "https://w7.pngwing.com/pngs/927/799/png-transparent-car-compact-sport-utility-vehicle-hyundai-creta-hyundai-atos-hyundai-creta-compact-car-car-india-thumbnail.png",
    description:
      "Hyundai Creta is a premium compact SUV known for its modern styling, advanced features, and smooth driving experience. It offers multiple powertrains including petrol, turbo-petrol, and diesel, and is loaded with tech and safety features.",
    details: {
      engine: {
        petrol: "1.5L MPi (115 PS, 144 Nm)",
        diesel: "1.5L CRDi (116 PS, 250 Nm)",
      },
      transmission: "6MT / IVT / 7DCT / 6AT",
      fuelOptions: "Petrol & Diesel",
      safetyRating: "5 Stars (Global NCAP - new gen)",
      features: [
        "10.25” Touchscreen Infotainment System",
        "Panoramic Sunroof, Wireless Charging",
        "ADAS Level 2, 6 Airbags, ESC",
        "Ventilated Front Seats, Bose Sound System",
        "Digital Instrument Cluster, Connected Car Tech",
      ],
      colorOptions: [
        { name: "Polar White", hex: "#ffffff" },
        { name: "Typhoon Silver", hex: "#c0c0c0" },
        { name: "Phantom Black", hex: "#1a1a1a" },
        { name: "Titan Grey", hex: "#4b4b4b" },
        { name: "Fiery Red", hex: "#b22222" },
        { name: "Deep Forest", hex: "#254117" },
        // "Polar White",
        // "Typhoon Silver",
        // "Phantom Black",
        // "Titan Grey",
        // "Fiery Red",
        // "Ranger Khaki",
      ],
      segment: "Compact SUV",
      launched: "First: 2015, Facelift: 2024",
      evAvailable: false,
    },
  };

  //360 VIEW 
  const totalImages = 35;
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
      <div className="cretabox">
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
                      src={`/images/creta/abyss-black_${index}.png`} // ✅ Now correct
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
                      alt={`creta-view-${index}`}
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

export default HyundaiCretaDetail;

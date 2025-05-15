// src/component/cardetails/TataNexonDetail.jsx
import React, { useState, useRef } from "react";
import './Details.css';
import './temp.css';

const TataNexonDetail = () => {
  const car = {
    name: "Tata Nexon",
    price: "₹8.10 – ₹15.50 Lakh",
    mileage: "17.4 – 24.0 km/l",
    width: "1804 mm",
    height: "1620 mm",
    image:
      "https://w7.pngwing.com/pngs/696/785/png-transparent-tata-motors-car-tata-nexon-xza-petrol-maruti-suzuki-vitara-brezza-tata-nexon-thumbnail.png",
    description:
      "Tata Nexon is a stylish and compact SUV offering strong performance, top-tier safety (5-star GNCAP), and a feature-rich cabin. Available in petrol and diesel with manual, AMT, and DCT options.",
    details: {
      engine: {
        petrol: "1.2L Turbo Revotron (120 PS, 170 Nm)",
        diesel: "1.5L Revotorq (115 PS, 260 Nm)",
      },
      transmission: "5MT / 6MT / AMT / DCT",
      fuelOptions: "Petrol & Diesel",
      safetyRating: "5 Stars (Global NCAP)",
      features: [
        "10.25” Touchscreen Infotainment",
        "Wireless Android Auto & Apple CarPlay",
        "360° Camera, Sunroof, JBL Sound System",
        "6 Airbags, ESP, ABS with EBD",
        "Ventilated Front Seats, Digital Cluster",
      ],
      colorOptions: [{ name: "Pure Grey", hex: "#b4b4b4" },
        { name: "Ocean Blue", hex: "#0077be" },
        { name: "Dusky White", hex: "#f5f5f5" },
        { name: "Daytona Grey", hex: "#6e6e6e" },
        { name: "Royal Blue", hex: "#4169e1" },
        { name: "Grassland Beige", hex: "#198754" },        
        // "Daytona Grey",
        // "Flame Red",
        // "Calgary White",
        // "Fearless Purple",
        // "Creative Ocean",
      ],
      segment: "Sub-Compact SUV",
      launched: "First: 2017, Facelift: 2023",
      evAvailable: true,
    },
  };
  //360 VIEW 
  const totalImages = 34;
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
                      src={`/images/nexon/PureGrey-${index}.png`}
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

export default TataNexonDetail;

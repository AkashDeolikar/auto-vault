// src/component/cardetails/ErtigaDetail.jsx
import React, { useState, useRef } from "react";
import './Details.css';
import './temp.css';

const SuzukiErtigaDetail = () => {
  const car = {
    name: "Ertiga",
    price: "₹8.35 – ₹12.79 Lakh",
    mileage: "19.01 – 26.08 km/l",
    width: "1735 mm",
    height: "1685 mm",
    image:
      "https://stimg.cardekho.com/images/car-images/930x620/Maruti/Ertiga/8711/1650016330874/224_white_fffff.jpg?imwidth=420&impolicy=resize",
    description:
      "Maruti Suzuki Ertiga is a compact MPV that offers excellent space, comfortable ride quality, and efficient engine options. It's a versatile family vehicle with advanced features and a well-rounded design, making it a great choice for urban families.",
    details: {
      engine: {
        petrol: "1.5L K15B (103 PS, 138 Nm)",
        diesel: "1.5L DDIS (95 PS, 225 Nm)",
      },
      transmission: "5MT / 4AT / 6AT",
      fuelOptions: "Petrol & Diesel",
      safetyRating: "4 Stars (Global NCAP)",
      features: [
        "7.0” Touchscreen Infotainment System",
        "Apple CarPlay & Android Auto",
        "SmartPlay Studio, 16” Alloy Wheels",
        "Rear Parking Sensors, 4 Airbags",
        "LED DRLs, Smart Keyless Entry",
      ],
      colorOptions: [
        { name: "Pearl Metallic Auburn Red", hex: "#6a1b1a" },
        { name: "Metallic Magma Grey", hex: "#505050" },
        { name: "Pearl Metallic Oxford Blue", hex: "#0a0f4a" },
        { name: "Splendid Silver", hex: "#c0c0c0" },
        { name: "Arctic White", hex: "#ffffff" },
        // "Oxford Blue",
        // "Prime Lucent Orange",
        // "Sizzling Red",
        // "Magnetic Grey",
        // "Pearl Arctic White",
        // "Silky Silver",
      ],
      segment: "Compact MPV",
      launched: "First: 2012, Facelift: 2022",
      evAvailable: false,
    },
  };

  //360 VIEW 
    const totalImages = 71;
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
                      src={`/images/ertiga/${index}.png`}
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
                      alt={`ertiga-view-${index}`}
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

export default SuzukiErtigaDetail;

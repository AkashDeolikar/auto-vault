// src/component/cardetails/OmniDetail.jsx
import React from "react";
import './Details.css';

const OmniDetail = () => {
  const car = {
    name: "Renault KWID",
    price: "₹4.70 – ₹6.45 Lakh",
    mileage: "22.0 – 22.25 km/l",
    width: "1579 mm",
    height: "1474 mm",
    image: "https://imgd.aeplcdn.com/370x208/n/cw/ec/44721/kwid-exterior-right-front-three-quarter.jpeg",
    description:
      "The Renault KWID is a stylish entry-level hatchback with SUV-inspired design. It offers great fuel efficiency, advanced features, and a budget-friendly price, making it an ideal choice for city commuters.",
    details: {
      engine: {
        petrol: "0.8L SCe & 1.0L SCe Petrol Engine",
      },
      transmission: "5-speed Manual / AMT",
      fuelOptions: "Petrol",
      safetyRating: "1 Star (Global NCAP)",
      features: [
        "8-inch Touchscreen MediaNAV",
        "LED DRLs and Headlamps",
        "Digital Instrument Cluster",
        "ABS with EBD",
        "Rear Parking Sensors",
      ],
      colorOptions: [
        { name: "Moonlight Silver", hex: "#c0c0c0" },
        { name: "Fiery Red", hex: "#b22222" },
        { name: "Zanskar Blue", hex: "#007FFF" },
        { name: "Outback Bronze", hex: "#6b4423" },
        { name: "Ice Cool White", hex: "#f8f8ff" },
      ],
      segment: "Entry-level Hatchback",
      launched: "2015 (Updated 2023)",
      evAvailable: false,
    },
  };

  return (
    <div className="car-detail" style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <div className="embed-section">
      <h2 className="subTitM alignC">360° Experience</h2>
              <div className="conAreaM alignC">
                Click and turn the vehicle image to the left or right.
              </div>
              <h3 className="subTitM alignC">Take you to Virtual Reality</h3>
        <iframe
          src="https://kwid.renault.co.in/kwid/?_gl=1*2ps9ee*_gcl_au*Mzk4NTkzNTUuMTc0NjY4NDQ4NA..*FPAU*Mzk4NTkzNTUuMTc0NjY4NDQ4NA..*_ga*MTY0MzkyMjg2Mi4xNzQ2Njg0NDg0*_ga_7C0H53S62Y*czE3NDY2ODQ0ODQkbzEkZzEkdDE3NDY2ODQ4MzQkajAkbDAkaDU5MzU4OTIzMQ..*_fplc*R01veklqWnh0TW85JTJCenAxTmdqbnlORyUyRkRnZ2lPZkc5OSUyRmh3SDNTSThvNVBCREZHa2djJTJGaHVianlJdmRnc2FYQ281VkVzWXBMdXVZdzZIdkJOZ08xbEd5TyUyRnBSNVRCcHdDMkc5VTM3bDcwREdNRUI3UXk4UEdYVXYzZGRTUSUzRCUzRA..#/car/kwid"
          title="Renault KWID"
          className="embed-frame"
        />
      </div>

      <h1>{car.name}</h1>
      {/* <img src={car.image} alt={car.name} style={{ width: "300px" }} /> */}
      <p><strong>Price:</strong> {car.price}</p>
      <p><strong>Mileage:</strong> {car.mileage}</p>
      <p><strong>Width:</strong> {car.width}</p>
      <p><strong>Height:</strong> {car.height}</p>
      <p>{car.description}</p>

      <h2>Specifications</h2>
      <p><strong>Engine (Petrol):</strong> {car.details.engine.petrol}</p>
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
  );
};

export default OmniDetail;

// import React, { useState } from 'react';
// import './cardetails.css';

// const carBrands = [
//   'Toyota', 'Honda', 'Suzuki', 'Hyundai', 'Tata', 'Mahindra', 'BMW', 'Audi', 'Mercedes', 'Kia'
// ];

// const commonModels = {
//   Toyota: ['Corolla', 'Camry', 'Innova', 'Fortuner'],
//   Honda: ['Civic', 'City', 'Amaze'],
//   Suzuki: ['Swift', 'Baleno', 'Alto'],
//   Hyundai: ['i10', 'i20', 'Creta'],
//   Tata: ['Nexon', 'Altroz', 'Harrier'],
//   Mahindra: ['Bolero', 'Scorpio', 'XUV700'],
//   BMW: ['X1', 'X3', 'X5'],
//   Audi: ['A4', 'A6', 'Q5'],
//   Mercedes: ['C-Class', 'E-Class', 'GLA'],
//   Kia: ['Seltos', 'Sonet', 'Carens']
// };

// const CarDetails = () => {
//   const [selectedBrand, setSelectedBrand] = useState('');
//   const [selectedModel, setSelectedModel] = useState('');
//   const [carInfo, setCarInfo] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [errorMsg, setErrorMsg] = useState('');

//   const fetchCarData = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setErrorMsg('');
//     setCarInfo(null);

//     try {
//       const response = await fetch(
//         `https://api.api-ninjas.com/v1/cars?make=${selectedBrand}&model=${selectedModel}`,
//         {
//           headers: {
//             'X-Api-Key': '9cdzSzWBPy1t6gqHDNCP0A==nRxzl2pQmxBB1WuX' // Replace with your API key
//           }
//         }
//       );

//       if (!response.ok) {
//         throw new Error('Failed to fetch car data');
//       }

//       const data = await response.json();
//       if (data.length > 0) {
//         setCarInfo(data[0]); // Use first result
//       } else {
//         setErrorMsg('No data found for the selected car.');
//       }
//     } catch (error) {
//       setErrorMsg('Error fetching data. Please check your API key or try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="car-search-container">
//       <h2>Find Car Details</h2>
//       <form onSubmit={fetchCarData}>
//         <label>
//           Brand:
//           <select
//             value={selectedBrand}
//             onChange={(e) => {
//               setSelectedBrand(e.target.value);
//               setSelectedModel('');
//               setCarInfo(null);
//             }}
//           >
//             <option value="">Select Brand</option>
//             {carBrands.map((brand) => (
//               <option key={brand} value={brand}>
//                 {brand}
//               </option>
//             ))}
//           </select>
//         </label>

//         <label>
//           Model:
//           <select
//             value={selectedModel}
//             onChange={(e) => setSelectedModel(e.target.value)}
//             disabled={!selectedBrand}
//           >
//             <option value="">Select Model</option>
//             {selectedBrand &&
//               commonModels[selectedBrand]?.map((model) => (
//                 <option key={model} value={model}>
//                   {model}
//                 </option>
//               ))}
//           </select>
//         </label>

//         <button type="submit" disabled={!selectedBrand || !selectedModel || loading}>
//           {loading ? 'Searching...' : 'Search'}
//         </button>
//       </form>

//       {errorMsg && <p className="error">{errorMsg}</p>}

//       {carInfo && (
//   <div className="result">
//     <h4>Car Details:</h4>
//     <div className="car-detail">
//       <div className="detail-box">
//         <p><strong>Make:</strong> {carInfo.make}</p>
//         <p><strong>Model:</strong> {carInfo.model}</p>
//         <p><strong>Year:</strong> {carInfo.year}</p>
//         <p><strong>Class:</strong> {carInfo.class}</p>
//       </div>
//       <div className="detail-box">
//         <p><strong>Fuel Type:</strong> {carInfo.fuel_type}</p>
//         <p><strong>Drive:</strong> {carInfo.drive}</p>
//         <p><strong>Transmission:</strong> {carInfo.transmission}</p>
//         <p><strong>Horsepower:</strong> {carInfo.horsepower} HP</p>
//       </div>
//     </div>
//   </div>
// )}

//     </div>
//   );
// };
// export default CarDetails;



// import React, { useState } from 'react';
// import carData from '../data/cars.json'; // Make sure this path is correct
// import './cardetails.css'; // Your existing CSS

// const CarDetails = () => {
//   const [selectedBrand, setSelectedBrand] = useState('');
//   const [selectedCar, setSelectedCar] = useState('');
//   const [selectedModel, setSelectedModel] = useState('');
//   const [carInfo, setCarInfo] = useState(null); // State to store the car details after search
//   const [submitted, setSubmitted] = useState(false); // State to track if the form was submitted
//   const [loading, setLoading] = useState(false); // State--for loading state

//   const brands = Object.keys(carData);
//   const cars = selectedBrand ? Object.keys(carData[selectedBrand]) : [];
//   const models =
//     selectedBrand && selectedCar ? carData[selectedBrand][selectedCar].models : [];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!selectedBrand || !selectedCar || !selectedModel) {
//       alert('Please select all fields');
//       return;
//     }

//     // Start loading process
//     setLoading(true);
//     setSubmitted(false);

//     // Simulate loading delay (you can remove this if you're fetching data from an API)
//     setTimeout(() => {
//       // Set car info from the selected data
//       setCarInfo(carData[selectedBrand][selectedCar]);
//       setLoading(false); // Stop loading
//       setSubmitted(true); // Mark form as submitted
//     }, 1000); // Simulate 1 second delay
//   };

//   return (
//     <div className="car-search-container">
//       <h2>Find Your Car</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Brand:
//           <select
//             value={selectedBrand}
//             onChange={(e) => {
//               setSelectedBrand(e.target.value);
//               setSelectedCar('');
//               setSelectedModel('');
//               setCarInfo(null); // Reset car info when brand changes
//               setSubmitted(false); // Reset form submission status
//             }}
//           >
//             <option value="">Select Brand</option>
//             {brands.map((brand) => (
//               <option key={brand} value={brand}>
//                 {brand}
//               </option>
//             ))}
//           </select>
//         </label>

//         <label>
//           Car:
//           <select
//             value={selectedCar}
//             onChange={(e) => {
//               setSelectedCar(e.target.value);
//               setSelectedModel('');
//               setCarInfo(null); // Reset car info when car changes
//               setSubmitted(false); // Reset form submission status
//             }}
//             disabled={!selectedBrand}
//           >
//             <option value="">Select Car</option>
//             {cars.map((car) => (
//               <option key={car} value={car}>
//                 {car}
//               </option>
//             ))}
//           </select>
//         </label>

//         <label>
//           Model:
//           <select
//             value={selectedModel}
//             onChange={(e) => setSelectedModel(e.target.value)}
//             disabled={!selectedCar}
//           >
//             <option value="">Select Model</option>
//             {models.map((model) => (
//               <option key={model} value={model}>
//                 {model}
//               </option>
//             ))}
//           </select>
//         </label>

//         <button type="submit" disabled={!selectedBrand || !selectedModel || loading}>
//           {loading ? 'Searching...' : 'Search'}
//         </button>
//       </form>

//       {submitted && carInfo && selectedModel && (
//         <div className="result">
//           <h4>Details:</h4><br/>
//           <img
//             src={carInfo.image}
//             alt={selectedCar}
//             style={{
//               width: '250px',
//               marginTop: '10px',
//               borderRadius: '10px',
//             }}
//           />
//           <p><strong>Brand:</strong> {selectedBrand}</p>
//           <p><strong>Car:</strong> {selectedCar}</p>
//           <p><strong>Model:</strong> {selectedModel}</p>
//           <p><strong>Engine:</strong> {carInfo.engine}</p>
//           <p><strong>Engine Option:</strong> {carInfo["engine-Option"]}</p>
//           <p><strong>Fuel Type:</strong> {carInfo.fuelType}</p>

//           <div>
//             <h5 className="heading"><strong>Transmission:</strong></h5>
//             <ul className="shift">
//               {carInfo.transmission.map((item, index) => (
//                 <li key={index}>{item}</li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h5 className="heading"><strong>Performance:</strong></h5>
//             <p><strong>Petrol:</strong> {carInfo.performance.petrol.power}, {carInfo.performance.petrol.torque}</p>
//             <p><strong>CNG:</strong> {carInfo.performance.cng.power}, {carInfo.performance.cng.torque}</p>
//             <p><strong>Diesel:</strong> {carInfo.performance.diesel.power}, {carInfo.performance.diesel.torque}</p>
//           </div>

//           <div>
//             <h5 className="heading"><strong>Mileage:</strong></h5>
//             <ul className="shift">
//               <li><strong>Petrol Manual:</strong> {carInfo.mileage.petrolManual}</li>
//               <li><strong>Petrol AMT:</strong> {carInfo.mileage.petrolAMT}</li>
//               <li><strong>CNG:</strong> {carInfo.mileage.cng}</li>
//               <li><strong>Diesel Manual:</strong> {carInfo.mileage.dieselManual}</li>
//             </ul>
//           </div>

//           <div>
//             <h5 className="heading"><strong>Safety Features:</strong></h5>
//             <ul className="shift">
//               {carInfo.safety.map((item, index) => (
//                 <li key={index}>{item}</li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h5 className="heading"><strong>Infotainment & Connectivity:</strong></h5>
//             <ul className="shift">
//               {carInfo.infotainment.map((item, index) => (
//                 <li key={index}>{item}</li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h5 className="heading"><strong>Interior & Comfort:</strong></h5>
//             <ul className="shift">
//               {carInfo.interior.map((item, index) => (
//                 <li key={index}>{item}</li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h5 className="heading"><strong>Exterior Design:</strong></h5>
//             <ul className="shift">
//               {carInfo.exterior.designFeatures.map((item, index) => (
//                 <li key={index}>{item}</li>
//               ))}
//             </ul>
//           </div>
//           <div>
//             <h5 className="heading"><strong>Color Options:</strong></h5>
//             <ul className="shift">
//               {carInfo.exterior.colorOptions.map((color, index) => (
//                 <li key={index}>{color}</li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h5 className="heading"><strong>Pricing:</strong></h5>
//             <p><strong>Base Model:</strong> {carInfo.pricing.baseModel}</p>
//             <p><strong>Top Model:</strong> {carInfo.pricing.topModel}</p>
//             <p><strong>Location:</strong> {carInfo.pricing.location}</p>
//           </div>

          
//         </div>
//       )}

//     </div>
//   );
// };

// export default CarDetails;



import React, { useState, useEffect } from 'react';
import carData from '../data/cars.json';
import './cardetails.css';
import { useNavigate } from 'react-router-dom';

const CarDetails = () => {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedCar, setSelectedCar] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [carInfo, setCarInfo] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/login'); // 🔁 Immediate redirect
    } else {
      setAuthChecked(true); // ✅ Allow render
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedBrand || !selectedCar || !selectedModel) {
      alert('Please select all fields');
      return;
    }

    setLoading(true);
    setSubmitted(false);

    setTimeout(() => {
      setCarInfo(carData[selectedBrand][selectedCar]);
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  if (!authChecked) return null; // Prevent UI render while checking auth

  const brands = Object.keys(carData);
  const cars = selectedBrand ? Object.keys(carData[selectedBrand]) : [];
  const models = selectedBrand && selectedCar ? carData[selectedBrand][selectedCar].models : [];

  return (
    <div className="car-search-container">
      <h2>Find Your Car</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Brand:
          <select
            value={selectedBrand}
            onChange={(e) => {
              setSelectedBrand(e.target.value);
              setSelectedCar('');
              setSelectedModel('');
              setCarInfo(null);
              setSubmitted(false);
            }}
          >
            <option value="">Select Brand</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </label>

        <label>
          Car:
          <select
            value={selectedCar}
            onChange={(e) => {
              setSelectedCar(e.target.value);
              setSelectedModel('');
              setCarInfo(null);
              setSubmitted(false);
            }}
            disabled={!selectedBrand}
          >
            <option value="">Select Car</option>
            {cars.map((car) => (
              <option key={car} value={car}>
                {car}
              </option>
            ))}
          </select>
        </label>

        <label>
          Model:
          <select
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
            disabled={!selectedCar}
          >
            <option value="">Select Model</option>
            {models.map((model) => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
          </select>
        </label>

        <button type="submit" disabled={!selectedBrand || !selectedModel || loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {submitted && carInfo && selectedModel && (
        <div className="result">
          <h4>Details:</h4><br/>
          <img
            src={carInfo.image}
            alt={selectedCar}
            style={{ width: '250px', marginTop: '10px', borderRadius: '10px' }}
          />
          <p><strong>Brand:</strong> {selectedBrand}</p>
          <p><strong>Car:</strong> {selectedCar}</p>
          <p><strong>Model:</strong> {selectedModel}</p>
          <p><strong>Engine:</strong> {carInfo.engine}</p>
          <p><strong>Engine Option:</strong> {carInfo["engine-Option"]}</p>
          <p><strong>Fuel Type:</strong> {carInfo.fuelType}</p>

          <div>
            <h5 className="heading"><strong>Transmission:</strong></h5>
            <ul>
              {carInfo.transmission.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="heading"><strong>Performance:</strong></h5>
            <p><strong>Petrol:</strong> {carInfo.performance.petrol.power}, {carInfo.performance.petrol.torque}</p>
            <p><strong>CNG:</strong> {carInfo.performance.cng.power}, {carInfo.performance.cng.torque}</p>
            <p><strong>Diesel:</strong> {carInfo.performance.diesel.power}, {carInfo.performance.diesel.torque}</p>
          </div>

          <div>
            <h5 className="heading"><strong>Mileage:</strong></h5>
            <ul>
              <li><strong>Petrol Manual:</strong> {carInfo.mileage.petrolManual}</li>
              <li><strong>Petrol AMT:</strong> {carInfo.mileage.petrolAMT}</li>
              <li><strong>CNG:</strong> {carInfo.mileage.cng}</li>
              <li><strong>Diesel Manual:</strong> {carInfo.mileage.dieselManual}</li>
            </ul>
          </div>

          <div>
            <h5 className="heading"><strong>Safety Features:</strong></h5>
            <ul>
              {carInfo.safety.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="heading"><strong>Infotainment & Connectivity:</strong></h5>
            <ul>
              {carInfo.infotainment.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="heading"><strong>Interior & Comfort:</strong></h5>
            <ul>
              {carInfo.interior.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="heading"><strong>Exterior Design:</strong></h5>
            <ul>
              {carInfo.exterior.designFeatures.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="heading"><strong>Color Options:</strong></h5>
            <ul>
              {carInfo.exterior.colorOptions.map((color, index) => (
                <li key={index}>{color}</li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="heading"><strong>Pricing:</strong></h5>
            <p><strong>Base Model:</strong> {carInfo.pricing.baseModel}</p>
            <p><strong>Top Model:</strong> {carInfo.pricing.topModel}</p>
            <p><strong>Location:</strong> {carInfo.pricing.location}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarDetails;

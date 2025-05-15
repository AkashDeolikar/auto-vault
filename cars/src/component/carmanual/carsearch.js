// // CarSearch.js
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { carData } from "../data/cardata";

// const CarSearch = () => {
//   const [brand, setBrand] = useState("");
//   const [model, setModel] = useState("");
//   const navigate = useNavigate();

//   const handleSearch = () => {
//     if (brand && model) {
//       const slug = model.toLowerCase().replace(/\s+/g, "-"); // Slugify
//       navigate(`/details/${slug}`);
//     }
//   };

//   return (
//     <div>
//       <h2>Select Car</h2>

//       {/* Brand Dropdown */}
//       <select onChange={(e) => setBrand(e.target.value)} value={brand}>
//         <option value="">Select Brand</option>
//         {Object.keys(carData).map((brand) => (
//           <option key={brand} value={brand}>{brand}</option>
//         ))}
//       </select>

//       {/* Model Dropdown */}
//       <select onChange={(e) => setModel(e.target.value)} value={model} disabled={!brand}>
//         <option value="">Select Model</option>
//         {brand && carData[brand].map((model) => (
//           <option key={model} value={model}>{model}</option>
//         ))}
//       </select>

//       <button onClick={handleSearch} disabled={!model}>Search</button>
//     </div>
//   );
// };

// export default CarSearch;

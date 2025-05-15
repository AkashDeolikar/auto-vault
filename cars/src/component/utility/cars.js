import { useParams } from "react-router-dom";

const CarDetails = () => {
  const { carId } = useParams();

  if (!carId) {
    return <h2>No Car Selected</h2>;
  }

  return (
    <div>
      <h2>Details of {carId.toUpperCase()}</h2>
      {/* Extend this with real data later */}
    </div>
  );
};

export default CarDetails;



// import React, { useState } from "react";
// import './cars.css';

// const Cars = ({ selectedBrand, onSelectBrand }) => {
//   const [selectedModel, setSelectedModel] = useState("");
//   const cars = [
//     { name: "Maruti", logo: "https://www.carlogos.org/logo/Suzuki-logo-640x285.jpg" },
//     { name: "Hyundai", logo: "https://www.carlogos.org/car-logos/hyundai-logo-2011-640.png" },
//     { name: "Tata", logo: "https://www.carlogos.org/logo/Tata-logo-2000-640x550.jpg" },
//     { name: "Toyota", logo: "https://www.carlogos.org/car-logos/toyota-logo-2020-europe-640.png" },
//     { name: "Volkswagen", logo: "https://www.carlogos.org/logo/Volkswagen-logo-2019-640x500.jpg" },
//   ];
//   const carModels = {
//     Maruti: ["Swift", "Baleno", "Brezza"],
//     Hyundai: ["i20", "Creta", "Venue"],
//     Tata: ["Nexon", "Harrier", "Altroz"],
//     Toyota: ["Fortuner", "Innova", "Glanza"],
//     Volkswagen: ["Polo", "Vento", "Taigun"]
//   };
//   return (
//     <div className="cr">
//       <div className="car-filter-sidebar">
//         <h3>Filter by Brand</h3>

//         {/* Brand Dropdown */}
//         <select
//           value={selectedBrand}
//           onChange={(e) => {
//             onSelectBrand(e.target.value);
//             setSelectedModel(""); // Reset model when brand changes
//           }}
//           className="dropdown"
//         >
//           <option value="">Select a brand</option>
//           {cars.map((brand, idx) => (
//             <option key={idx} value={brand.name}>
//               {brand.name}
//             </option>
//           ))}
//         </select>

//         {/* Model Dropdown (only show if brand selected) */}
//         {selectedBrand && (
//           <>
//             <h4>Select Model</h4>
//             <select
//               value={selectedModel}
//               onChange={(e) => setSelectedModel(e.target.value)}
//               className="dropdown"
//             >
//               <option value="">Select a model</option>
//               {carModels[selectedBrand]?.map((model, idx) => (
//                 <option key={idx} value={model}>
//                   {model}
//                 </option>
//               ))}
//             </select>
//           </>
//         )}
//       </div>

//       <div className="view">
//         <div className="block"></div>
//         <div className="block"></div>
//         <div className="block"></div>
//       </div>
//     </div>
//   );
// }

// export default Cars;
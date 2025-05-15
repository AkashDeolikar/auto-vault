import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import './cardetail.css';

const Cardetail = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  const featuredCars = useMemo(() => [
    { id: 1,
      name: "Maruti Suzuki Swift",
      price: "5.99 Lakh",
      mileage: "22 km/l",
      width: "1735 mm",
      height: "1530 mm",
      image: "https://e7.pngegg.com/pngimages/317/519/png-clipart-suzuki-swift-maruti-suzuki-car-suzuki-compact-car-subcompact-car-thumbnail.png", description: "Sporty hatchback with great mileage." },
    { id: 2,
      name: "Hyundai Creta",
      price: "10.87 Lakh",
      mileage: "17 km/l",
      width: "1790 mm",
      height: "1635 mm",
      image: "https://w7.pngwing.com/pngs/927/799/png-transparent-car-compact-sport-utility-vehicle-hyundai-creta-hyundai-atos-hyundai-creta-compact-car-car-india-thumbnail.png", description: "Top-selling SUV in India." },
    { id: 3,
      name: "Tata Nexon",
      price: "8.15 Lakh",
      mileage: "18.5 km/l",
      width: "1804 mm",
      height: "1620 mm",
      image: "https://w7.pngwing.com/pngs/696/785/png-transparent-tata-motors-car-tata-nexon-xza-petrol-maruti-suzuki-vitara-brezza-tata-nexon-thumbnail.png", description: "Stylish, safe and value-for-money." },
    { id: 4,
      name: "Suzuki Ertiga",
      price: "9.50 Lakh",
      mileage: "20.3 km/l",
      width: "1735 mm",
      height: "1690 mm",
      image: "https://stimg.cardekho.com/images/car-images/930x620/Maruti/Ertiga/8711/1650016330874/224_white_fffff.jpg?imwidth=420&impolicy=resize", description: "Affordable 7-seater MPV." },
    { id: 5,
      name: "Omni",
      price: "3.50 Lakh",
      mileage: "16.8 km/l",
      width: "1410 mm",
      height: "1640 mm",
      image: "https://www.autovista.in/assets/product_images/Omni_460_1.jpg", description: "Classic utility van by Maruti." },
    { id: 6,
      name: "Toyota Innova",
      price: "17.50 Lakh",
      mileage: "13.68 km/l",
      width: "1830 mm",
      height: "1795 mm",
      description: "Premium MPV with comfort and space.",
      image: "https://www.jansatta.com/wp-content/uploads/2019/03/toyota-innova-crysta-small-2.jpg?w=440" },
  ], []);

  useEffect(() => {
    const carData = featuredCars.find((c) => c.id === parseInt(id));
    setCar(carData);
  }, [id, featuredCars]);

  if (!car) return <div className="car-detail"><h2>Car not found</h2></div>;

  return (
    <div className="car-detail">
      <h2>{car.name}</h2>
      <img src={car.image} alt={car.name} />
      <p>----<strong>Quick Info</strong>----</p>
      <p><strong>Price:</strong> ₹{car.price}</p>
      <p><strong>Mileage:</strong>{car.mileage}</p>
      <p><strong>Description:</strong> {car.description}</p>
      <br/>
      <p>----<strong>Dimensions</strong>----</p>
      <p>Width : {car.width}</p>
      <p>Height : {car.height}</p>
    </div>
  );
};

export default Cardetail;

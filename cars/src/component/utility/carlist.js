import React from "react";

const CarTable = () => {
  const orders = [
    { id: 1, car: "Tata Nexon", price: 1000000, type: "purchase" },
    { id: 2, car: "Hyundai i20", price: 850000, type: "purchase" },
    { id: 3, car: "Volkswagen Polo", price: 920000, type: "offer" },
  ];

  const totalRevenue = orders.reduce((sum, order) => sum + order.price, 0);
  const purchaseRevenue = orders
    .filter((order) => order.type === "purchase")
    .reduce((sum, order) => sum + order.price, 0);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Revenue Dashboard</h2>
      <p>Total Revenue: ₹{totalRevenue.toLocaleString()}</p>
      <p>Purchase Revenue: ₹{purchaseRevenue.toLocaleString()}</p>
    </div>
  );
};

export default CarTable;

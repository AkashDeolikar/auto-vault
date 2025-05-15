import React from 'react';
import './seeoffer.css';

const Seeoffer = () => {
  const offers = [
    {
      id: 1,
      title: "Summer Bonanza – Up to ₹50,000 off",
      description: "Get exciting discounts on Maruti and Hyundai models this summer!",
      image: "https://previews.123rf.com/images/arcady31/arcady311606/arcady31160600002/59113161-special-offer-red-star-icon.jpg",
      validTill: "June 30, 2025",
    },
    {
      id: 2,
      title: "Zero Down Payment on Tata Cars",
      description: "Drive home a Tata car with zero down payment and easy EMIs.",
      image: "https://img.freepik.com/free-vector/best-offer-inscription-paint-blot_1262-7445.jpg?semt=ais_hybrid&w=740",
      validTill: "July 15, 2025",
    },
    {
      id: 3,
      title: "Toyota Exchange Offer",
      description: "Exchange your old car and get ₹30,000 additional bonus.",
      image: "https://img.freepik.com/free-vector/red-banner-limited-offer-vector-red-label-isolated-transparent-background_145391-862.jpg?semt=ais_hybrid&w=740",
      validTill: "May 31, 2025",
    },
  ];

  return (
    <div className="offers-page">
      <h2>Special Offers</h2>
      <div className="offers-grid">
        {offers.map((offer) => (
          <div className="offer-card" key={offer.id}>
            <img src={offer.image} alt={offer.title} />
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
            <p className="validity">Valid till: {offer.validTill}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Seeoffer;
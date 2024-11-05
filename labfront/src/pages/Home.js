import React from 'react';
import './Home.css';

const Home = () => {
  const cards = [
    {
      id: 1,
      title: "Card 1",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Card 2",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Card 3",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      title: "Card 4",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="home">
      <h2>Welcome to the Home Page</h2>
      <div className="card-container">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <img src={card.image} alt={card.title} className="card-image" />
            <h3 className="card-title">{card.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

import React from 'react';
import { Carousel } from 'antd';


const contentStyle: React.CSSProperties = {
    padding: "2rem",
    color: "#fff",
    textAlign: "center",
    background: "#364d79",
  };
  
  const Offer: React.FC = () => (
    <Carousel autoplay>
      <div style={contentStyle}>
        <h2>20% Off All Cakes!</h2>
        <p>
          Order now and enjoy exclusive discounts. Valid for a limited time.
        </p>
        <button style={{ padding: "0.5rem 1.5rem", borderRadius: "10px" }}>
          Order Now
        </button>
      </div>
      <div style={contentStyle}>
        <h2>Special Holiday Offers</h2>
        <p>Get extra toppings for free on your next order.</p>
      </div>
      <div style={contentStyle}>
        <h2>Celebrate with Us</h2>
        <p>
          Enjoy exclusive deals for birthdays, anniversaries, and more!
        </p>
      </div>
    </Carousel>
  );
  

export default Offer;
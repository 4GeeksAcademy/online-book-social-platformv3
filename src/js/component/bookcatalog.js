import React from 'react';
import "../../styles/bookcatalog.css";
import Carousel from 'react-bootstrap/Carousel';

export const BookCatalog = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1465929639680-64ee080eb3ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>"A room without books is like a body without a soul" - Marcus Tullius Cicero.</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://plus.unsplash.com/premium_photo-1683535508596-9216de2ad64b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>We're here to help you discover new books and stay up to date with what is trending amongst readers!</h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div>
        {/* search bar JSX code here */}
        
      </div>
    </div>
  );
};

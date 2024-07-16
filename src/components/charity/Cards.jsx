import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Cards = () => (
  <div className="my-8">
    <h3 className="text-2xl mb-4">Our Campaigns</h3>
    <Carousel showArrows={true} infiniteLoop={true} showThumbs={false}>
      <div>
        <img src="/path/to/image1.jpg" alt="Campaign 1" />
        <p className="legend">Campaign 1 Description</p>
      </div>
      <div>
        <img src="/path/to/image2.jpg" alt="Campaign 2" />
        <p className="legend">Campaign 2 Description</p>
      </div>
      <div>
        <img src="/path/to/image3.jpg" alt="Campaign 3" />
        <p className="legend">Campaign 3 Description</p>
      </div>
    </Carousel>
  </div>
);

export default Cards;

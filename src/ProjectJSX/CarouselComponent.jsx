import React from "react";
import { Carousel } from "react-bootstrap";

function CustomCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/pics/crouel1.jpg`}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Fresh from Our Fields to Your Table</h3>
          <p>
            Explore local produce and forge connections with nearby farmers.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/pics/crouel2.jpg`}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Harvest the Difference</h3>
          <p>
            Join us in promoting sustainability and supporting your community's
            agricultural heritage.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/pics/crouel3.jpg`}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Farm to Fork, Heart to Heart</h3>
          <p>
            Experience the joy of knowing where your food comes from, one farm
            at a time.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CustomCarousel;

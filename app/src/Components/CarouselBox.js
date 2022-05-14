import React from "react";
import { Carousel } from "react-bootstrap";

export const CarouselBox = () => {
  function importAll(r) {
    return r.keys().map(r);
  }
  const images = importAll(
    require.context("../assets", false, /\.(png|jpe?g|svg)$/)
  );
  return (
    <Carousel>
      {images.map((image) => (
        <Carousel.Item>
          <img style={{ height: "100vh" }} className="d-block w-100 img-fluid" src={image} />
          <Carousel.Caption>
            <h3>Women</h3>
            <p>Потом тут будут мои фотографии</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

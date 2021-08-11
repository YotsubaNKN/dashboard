import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

function Beranda() {
    return (
<Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-50"
      src="15.png"
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-50"
      src="11.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-50"
      src="1.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
};

export default Beranda;
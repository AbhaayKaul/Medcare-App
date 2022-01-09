import React from "react";
import { Carousel, Image } from "react-bootstrap";

const HomeCarousel = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <Image
          className="d-block w-100 opaci-carousel " 
          src="https://cdn.pixabay.com/photo/2020/11/02/19/52/doctor-5707722_960_720.jpg"
          alt="First slide"
          fluid
        />
        <Carousel.Caption className="carousel-caption">
          <h3 className="h3-background-color font-link">Book an Appointment</h3>
          <p className="black-color">Consult a doctor, right from the comfort of your home</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100 opaci-carousel"
          src="https://commonangle.com/wp-content/uploads/2018/09/hipaa-certified-it-professionals.jpg"
          alt="Second slide"
          fluid
        />

        <Carousel.Caption className="carousel-caption">
          <h3 className="h3-background-color font-link">Access Reports</h3>
          <p className="black-color">we have your records safe, access it from anywhere</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100 opaci-carousel"
          src="https://www.healio.com/~/media/slack-news/stock-images/fm_im/p/pills_shutterstock.jpg?h=630&w=1200&la=en&hash=27059EDB24748D98476311E93B6072E0"
          alt="Third slide"
          fluid
        />

        <Carousel.Caption className="carousel-caption">
          <h3 className="h3-background-color font-link">Order medicines at discounted prices label</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousel;

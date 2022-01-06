import React from 'react'
import { Carousel, Image } from 'react-bootstrap'

const HomeCarousel = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <Image
          className="d-block w-100 "
          src="https://cdn.pixabay.com/photo/2020/11/02/19/52/doctor-5707722_960_720.jpg"
          alt="First slide"
          fluid
        />
        <Carousel.Caption className="carousel-caption">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2020/05/18/18/00/doctor-5187733_960_720.png"
          alt="Second slide"
          fluid
        />

        <Carousel.Caption className="carousel-caption">
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2018/09/27/14/14/analysis-3707159_960_720.jpg"
          alt="Third slide"
          fluid
        />

        <Carousel.Caption className="carousel-caption">
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default HomeCarousel

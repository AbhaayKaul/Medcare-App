import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Aos from 'aos'
import 'aos/dist/aos.css'

const CatalogueBar = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <Container data-aos="fade-up" className="text-center my-5">
      <div className="row">
        <div className="col-lg-4">
          <i className="far fa-calendar-check fa-9x"></i>
          <h4>Book Appointment</h4>
        </div>
        <div className="col-lg-4">
          <i className="fas fa-user-md fa-9x"></i>
          <h4>Consult Doctor</h4>
        </div>
        <div className="col-lg-4">
          <i className="fas fa-pills fa-9x"></i>
          <h4>Buy Medicines</h4>
        </div>
      </div>
    </Container>
  )
}

export default CatalogueBar

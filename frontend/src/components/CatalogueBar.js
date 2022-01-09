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
          <h2 className="catalogue-bar-heading">100% Confidential
          </h2>
          <p>
          All advice & consultations are completely confidential. You can also delete chats whenever you want.
          </p>
          {/* <p> */}
          {/* <a className="btn btn-secondary" href="#"> */}
          {/* View details &raquo; */}
          {/* </a> */}
          {/* </p> */}
        </div>
        <div className="col-lg-4">
          <i className="fas fa-user-md fa-9x"></i>

          <h2 className="catalogue-bar-heading">Certified Doctors</h2>
          <p>
          We offer quality healthcare through our network of certified and experienced doctors
          </p>
          {/* <p> */}
          {/* <a className="btn btn-secondary" href="#"> */}
          {/* View details &raquo; */}
          {/* </a> */}
          {/* </p> */}
        </div>
        <div className="col-lg-4">
          <i className="fas fa-pills fa-9x"></i>
          <h2 className="catalogue-bar-heading">Convenience
          </h2>
          <p>
          Forget the hassle of long queues and rush hour. Seek expert opinion anytime, anywhere.
          </p>
          {/* <p> */}
          {/* <a className="btn btn-secondary" href="#"> */}
          {/* View details &raquo; */}
          {/* </a> */}
          {/* </p> */}
        </div>
      </div>
    </Container>
  )
}

export default CatalogueBar

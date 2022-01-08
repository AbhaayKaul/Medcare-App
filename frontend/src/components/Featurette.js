import React, { useEffect } from 'react'
import { Image } from 'react-bootstrap'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Featurette = () => {
  useEffect(() => {
    Aos.init({ duration: 2500 })
  }, [])
  return (
    <>
      {/* <Container */}
      <div
        data-aos="fade-down"
        className="row featurette margin-featurette box"
      >
        <div className="col-md-7">
          <h1 className="featurette-heading ">Start a session</h1>
          <p className="lead">
            Select the type of category you would like to consult with the
            doctor.
          </p>
        </div>
        <div className="col-md-5">
          <Image src="/images/service-1.png" />
        </div>
      </div>
      <div
        data-aos="fade-right"
        className="row featurette margin-featurette box"
      >
        <div className="col-md-7 order-md-2">
          <h1 className="featurette-heading">Tell us what’s troubling you</h1>
          <p className="lead">
            Type in your concern and attach prescription, lab reports if any.
            Help doctor understand your case better.
          </p>
        </div>
        <div className="col-md-5 order-md-1">
          <Image src="/images/service-2.png" />
        </div>
      </div>

      <div
        data-aos="fade-left"
        className="row featurette margin-featurette box"
      >
        <div className="col-md-7">
          <h1 className="featurette-heading">Connect with the doctor</h1>
          <p className="lead">
            A doctor is auto-assigned to you that best matches your concern. You
            will get a diagnosis and treatment for your condition.
          </p>
        </div>
        <div className="col-md-5">
          <Image src="/images/service-3.png" />
        </div>
      </div>

      <div data-aos="fade-up" className="row featurette margin-featurette box">
        <div className="col-md-7 order-md-2">
          <h1 className="featurette-heading">Follow up with your doctor.</h1>
          <p className="lead">
            Still, need more clarity? You can follow up with the doctor even
            after your chat window closes.
          </p>
        </div>
        <div className="col-md-5">
          <Image src="/images/service-4.png" />
        </div>
      </div>
    </>
  )
}

export default Featurette

import React from 'react'
import { Container } from 'react-bootstrap'

const CatalogueBar = () => {
  return (
    <Container className="text-center my-5">
      <div className="row">
        <div className="col-lg-4">
          <i className="far fa-calendar-check fa-9x"></i>
          <h2>Heading</h2>
          <p>
            Some representative placeholder content for the three columns of
            text below the carousel. This is the first column.
          </p>
          <p>
            {/* <a className="btn btn-secondary" href="#"> */}
            View details &raquo;
            {/* </a> */}
          </p>
        </div>
        <div className="col-lg-4">
          <i className="fas fa-user-md fa-9x"></i>

          <h2>Heading</h2>
          <p>
            Another exciting bit of representative placeholder content. This
            time, we've moved on to the second column.
          </p>
          <p>
            {/* <a className="btn btn-secondary" href="#"> */}
            View details &raquo;
            {/* </a> */}
          </p>
        </div>
        <div className="col-lg-4">
          <i className="fas fa-pills fa-9x"></i>
          <h2>Heading</h2>
          <p>
            And lastly this, the third column of representative placeholder
            content.
          </p>
          <p>
            {/* <a className="btn btn-secondary" href="#"> */}
            View details &raquo;
            {/* </a> */}
          </p>
        </div>
      </div>
    </Container>
  )
}

export default CatalogueBar

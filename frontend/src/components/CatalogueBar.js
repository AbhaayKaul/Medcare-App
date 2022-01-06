import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'

const CatalogueBar = () => {
  // useEffect(() => {
  //   const boxes = document.querySelectorAll('.box')

  //   window.addEventListener('scroll', checkBoxes)

  //   checkBoxes()

  //   function checkBoxes() {
  //     const triggeredBottom = (window.innerHeight / 5) * 4

  //     boxes.forEach((box) => {
  //       const boxTop = box.getBoundingClientRect().top

  //       if (boxTop < triggeredBottom) {
  //         box.classList.add('show')
  //       } else {
  //         box.classList.remove('show')
  //       }
  //     })
  //   }
  // })

  return (
    <Container className="text-center my-5">
      <div className="row">
        <div className="col-lg-4">
          <i class="far fa-calendar-check fa-9x"></i>
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
          <i class="fas fa-user-md fa-9x"></i>

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
          <i class="fas fa-pills fa-9x"></i>
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

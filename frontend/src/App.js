import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import Signin from './Screens/Signin'
import Signup from './Screens/Signup'
import HomeScreen from './Screens/HomeScreen'

// Box Animation

// const boxes = document.querySelectorAll('.box')

// window.addEventListener('scroll', checkBoxes)

// checkBoxes()

// function checkBoxes() {
//   const triggeredBottom = (window.innerHeight / 5) * 4

//   boxes.forEach((box) => {
//     const boxTop = box.getBoundingClientRect().top

//     if (boxTop < triggeredBottom) {
//       box.classList.add('show')
//     } else {
//       box.classList.remove('show')
//     }
//   })
// }

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/login" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App

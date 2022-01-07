import React from 'react'
import HomeCarousel from '../components/HomeCarousel'
import CatalogueBar from '../components/CatalogueBar'
import Featurette from '../components/Featurette'

function HomeScreen() {
  return (
    <>
      {/* <h1>Home Page</h1> */}
      <HomeCarousel />
      <CatalogueBar />
      <Featurette />
    </>
  )
}

export default HomeScreen

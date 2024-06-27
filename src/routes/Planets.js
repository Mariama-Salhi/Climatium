import React from 'react'
import Navbar from '../componentes/Navbar'
import BgImage from '../componentes/BgImage'
import Footer from '../componentes/Footer'
import PlanetList from '../componentes/PlanetList'

const Planets = () => {
  return (
    <div>
        <Navbar />
        <BgImage />
        <PlanetList />
        <Footer />
    </div>
  )
}

export default Planets
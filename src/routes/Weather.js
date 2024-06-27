import React from 'react'
import Navbar from '../componentes/Navbar'
import Footer from '../componentes/Footer'
import WeatherApi from '../componentes/WeatherApi'

const Weather = () => {
  return (
    <div>
        <Navbar />
        <WeatherApi />
        <Footer />
    </div>
  )
}

export default Weather
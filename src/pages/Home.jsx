import React, { useEffect } from 'react'
import Header from '../components/home/Header'
import HotPizza from '../components/home/HotPizza'
import Popularfood from '../components/home/Popularfood'
import Testimonial from '../components/home/Testimonial'
import WhatWeServe from '../components/home/WhatWeServe'
import WhyTastyTreat from '../components/home/WhyTastyTreat'

const Home = () => {
  useEffect(() => {
    document.title = "Dilli Darbar - Order Food Online In Malegaon";
  }, []);
  return (
    <div>
      <Header/>
      <WhatWeServe/>
      <Popularfood/>
      <WhyTastyTreat/>
      <HotPizza/>
      <Testimonial/>
    </div>
  )
}

export default Home
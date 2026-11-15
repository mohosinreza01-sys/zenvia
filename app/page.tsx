import React from 'react'
import Hero from './components/home/Hero'
import FeaturedProperties from './components/home/FeaturedProperties'
import WhyChooseUs from './components/home/WhyChooseUs'
import Process from './components/home/Process'
import Agents from './components/home/Agents'
import Testimonials from './components/home/Testimonials'
import Contact from './components/home/Contact'
import OurProcess from './components/home/OurProcess'

const page = () => {
  return (
    <div>
      <Hero />
      <FeaturedProperties />
      <WhyChooseUs />
      <Process />
      <OurProcess />
      <Agents />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default page

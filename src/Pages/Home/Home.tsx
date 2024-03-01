import React from 'react'
import Header from '../../Components/Header/Header'
import Carousel from './CarouselHome'
import Intro from './Intro'
import SocialMedia from './SocialMedia'
import Footer from '../../Components/Footer/Footer'
export default function Home() {
  return (
    <div>
      <Header/>
      <Carousel/>
      <Intro/>
      <SocialMedia/>
      <Footer/>
    </div>
  )
}

import React from 'react'
import Hero from '../Components/Hero/Hero'
import Faq from '../Components/Faq/Faq'
import Team from '../Components/Team/Team'
import Counter from '../Components/Counter/Counter'

const About = () => {
  const heroData={
    img:'/work/shop/Images/about.png',
    heading:'WE ARE PASSIONATE',
    pageName:'About',
  }
  return (
    <>
    <Hero heroData={heroData}/>
    <Team/>
    <Counter/>
    <Faq/>
    </>
  )
}

export default About
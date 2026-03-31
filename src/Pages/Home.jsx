import React from 'react'
import Hero from '../Components/Hero/Hero'
import Policy from '../Components/Policy/Policy'
import HomeProduct from '../Components/HomeProduct/HomeProduct'
import Faq from '../Components/Faq/Faq'
import WomanProduct from '../Components/WomanProduct/WomanProduct'
import Deals from '../Components/Deals/Deals'
import Counter from '../Components/Counter/Counter'

const Home = () => {
    const heroData={
        img:'/work/shop/Images/product.png',
        heading:'Join The Organic Movement!',
        pageName:'Best Quality Products',
      }
  return (
    <>
    <Hero heroData={heroData}/>
    <Policy/>
    <HomeProduct/>
    <Deals/>
    <WomanProduct/>
    <Counter/>
    <Faq/>
    </>
  )
}

export default Home
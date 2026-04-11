import React from 'react'
import styled from 'styled-components'
import Heading from '../Components/Heading/Heading'
import Counter from '../Components/Counter/Counter'
import Faq from '../Components/Faq/Faq'
import ProductFilter from '../Components/ProductFilter/ProductFilter'

const Product = () => {

  const headingData = {
      subHeading : 'POPULAR PRODUCTS',
      mainHeading : 'Products'
  }
  

  return (
    <Main>
      <Heading headingData={headingData}/>
      <div className="main__wrapper">
        <ProductFilter/>
      </div>
      <Counter/>
      <Faq/>
    </Main>
  )
}
const Main = styled.section`
  padding:0px 0 0;
  margin-block-start:80px;
  .main__wrapper{
    margin-block-start:50px;
  }
`

export default Product
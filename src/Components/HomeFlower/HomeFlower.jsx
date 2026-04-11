import React, { useContext } from 'react'
import styled from 'styled-components'
import Heading from '../Heading/Heading'
import { AppContext } from '../../Context/Context'
import CardFlower from './CardFlower'

const HomeFlower = () => {
    const{flowerProduct}=useContext(AppContext)
    const headingData = {
        subHeading : 'POPULAR PRODUCTS',
        mainHeading : 'flowers',
    }
  return (
    <Main>
        <Heading headingData={headingData}/>
        <div className="main__wrapper">
            <CardFlower curElm={flowerProduct}/>
        </div>
    </Main>
  )
}
const Main = styled.section`
    margin-block:50px;

    .main__wrapper{
        margin-block-start:30px;
    }
    
`

export default HomeFlower
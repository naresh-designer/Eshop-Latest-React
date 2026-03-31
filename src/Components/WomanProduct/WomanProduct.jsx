import React, { useContext } from 'react'
import styled from 'styled-components'
import Heading from '../Heading/Heading'
import { AppContext } from '../../Context/Context'
import Card from '../Card/Card'

const WomanProduct = () => {
    const{womanProduct}=useContext(AppContext)
    const headingData = {
        subHeading : 'POPULAR PRODUCTS',
        mainHeading : 'fragrances'
    }
  return (
    <Main>
        <div className="main__wrapper">
            <Heading headingData={headingData}/>
            <div className="grid grid__four">
                {
                   womanProduct.slice(0,4).map((curElm)=>{
                    return(
                        <Card key={curElm.id} curElm={curElm}/>
                    )
                   }) 
                }
            </div>
        </div>
    </Main>
  )
}

const Main = styled.section``

export default WomanProduct
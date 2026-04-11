import React, { useContext } from 'react'
import styled from 'styled-components'
import Heading from '../Heading/Heading'
import { AppContext } from '../../Context/Context'
import CustomerCard from './CustomerCard'

const CustomerReview = () => {
    const{womanProduct}=useContext(AppContext)
    const headingData = {
        mainHeading : 'customer Says',
    }
  return (
    <Main>

        <div className="main__wrapper">
            <Heading headingData={headingData}/>
            <CustomerCard womanProduct={womanProduct}/>
        </div>
    </Main>
  )
}

const Main = styled.section`
    margin-block-start:50px;
`

export default CustomerReview
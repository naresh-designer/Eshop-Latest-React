import React, { useContext } from 'react'
import Heading from '../Heading/Heading'
import styled from 'styled-components'
import { AppContext } from '../../Context/Context'
import FaqList from './FaqList'

const Faq = () => {
    const{products}=useContext(AppContext)
    const headingData = {
        mainHeading : 'FAQs'
    }
  return (
    <Main>
        <Heading headingData={headingData}/>
        <FaqList products={products}/>
    </Main>
  )
}

const Main = styled.section` 
    background-color:#F3F6F6;
    padding:100px 0;
`

export default Faq
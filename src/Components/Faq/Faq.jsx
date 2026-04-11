import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppContext } from '../../Context/Context'
import FaqList from './FaqList'

const Faq = () => {
    const{products}=useContext(AppContext)
  return (
    <Main>
      <div className="faq__card">
        <div className="faq__list">
        <FaqList products={products}/>
        </div>
      </div>
    </Main>
  )
}

const Main = styled.section` 

.faq__card{
  padding:50px 0;
}

    

   
`

export default Faq
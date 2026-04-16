import React, { useContext } from 'react'
import { AppContext } from '../../Context/Context'
import styled from 'styled-components'
import DetailsContact from './DetailsContact'
import Counter from '../Counter/Counter'
import CustomerReview from '../CustomerReview/CustomerReview'
import { useParams } from 'react-router-dom'

const Details = () => {
  const{products}=useContext(AppContext)
  const{id}=useParams()
  return (
    <Main>
      <div className="main__wrapper">
        {
          products.map((curElm,index)=>{
            if(curElm.id==id){
              return(
                <DetailsContact key={index} curElm={curElm}/>
              )
            }
          })
        }
          
      </div>
      <Counter/>
      <CustomerReview/>
    </Main>
  )
}
const Main = styled.section`
  margin-block:100px;
`

export default Details
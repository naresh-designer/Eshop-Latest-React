import React, { useContext } from 'react'
import { AppContext } from '../../Context/Context'
import styled from 'styled-components'
import DetailsContact from './DetailsContact'
import Counter from '../Counter/Counter'

const Details = () => {
  const{products}=useContext(AppContext)
  return (
    <Main>
      <div className="main__wrapper">
          <DetailsContact products={products}/>
      </div>
      <Counter/>
    </Main>
  )
}
const Main = styled.section`
  margin-block:50px;
`

export default Details

import Card from '../Card/Card'
import Heading from '../Heading/Heading'
import styled from 'styled-components'
import React, { useContext } from 'react'
import { AppContext } from '../../Context/Context'

const HomeProduct = () => {
    const{menProducts}=useContext(AppContext)
    const headingData = {
        subHeading : 'POPULAR PRODUCTS',
        mainHeading : 'beauty',
    }
  return (
    <Main>
        <div className="main__wrapper">
            <Heading headingData={headingData}/>

            <div className='grid grid__four' >

                {
                    menProducts.slice(0,4).map((curElm)=>{
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
const Main = styled.section`
    margin-block:50px;
    
   
  }
`

export default HomeProduct
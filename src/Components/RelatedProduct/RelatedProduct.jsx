import React from 'react'
import styled from 'styled-components'
import Heading from '../Heading/Heading'

const RelatedProduct = ({curElm}) => {
  return (
    <Main>
        <div className="related__product">
            <Heading headingData={{mainHeading:'Related Product'}}/>
            <div className="grid grid__four">
                {
                    curElm.images.map((curElm)=>{
                        return(
                            <img src={curElm} alt="" />
                        )
                    })
                }

            </div>
        </div>
    </Main>
  )
}
const Main = styled.section``
export default RelatedProduct
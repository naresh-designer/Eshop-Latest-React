import React from 'react'
import styled from 'styled-components'
import { FaRegStarHalfStroke,FaStar,FaRegStar } from "react-icons/fa6";

const Star = ({rating}) => {

    const starRating = Array.from({length:5},(_,index)=>{
        let number = index + 0.5

        return(
            <span>
                {
                    rating >= number + 1 ? (<FaStar className='active'/>) : 
                    rating >= number ? (<FaRegStarHalfStroke className='active'/>) : 
                    (<FaRegStar className='active'/>)
                }
            </span>
        )
    })
  return (
    <Main>
        <div>{starRating}</div>
    </Main>
  )
}
const Main = styled.section`
        .active{
            color:orange;
        }
`

export default Star
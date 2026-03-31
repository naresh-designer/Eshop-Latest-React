import React, { useState } from 'react'
import styled from 'styled-components'

const Star = () => {
    const[rating,setRating]=useState()

    const handleClick = (index)=>{
        setRating(index + 1)
    }

  return (
    <Main>
        <div className="star">
            {
                new Array(5).fill(0).map((_,i)=>{
                    return(
                        <span key={i} className={rating > i ? 'active':''} onClick={()=>handleClick(i)}>&#9733;</span>
                    )
                })
            }
            <span className={rating > 0 ? 'show': 'hide'}>({rating}/5)</span>
            
        </div>
    </Main>
  )
}
const Main = styled.section`
    .star{
        display:flex;

        span{
            cursor:pointer;
        }
    }
        .active{
            color:${({theme})=>theme.common.greenBg};
        }
            .hide{
                display:none;
            }

            .show{
                display:block;
                color:${({theme})=>theme.common.orangeColor};
            }
`

export default Star
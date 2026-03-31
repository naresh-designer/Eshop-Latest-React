import React from 'react'
import styled from 'styled-components'

const Heading = ({headingData}) => {
  return (
    <Main>
      <div className="heading">
        <span>{headingData.subHeading}</span>
        <h1>{headingData.mainHeading}</h1>
        </div>
    </Main>
  )
}

const Main = styled.section`
    text-align:center;
    text-transform:lowercase;

    .heading{
    display:inline-block;
    border-bottom:2px solid hotpink;
    position:relative;
    padding-bottom:10px;

      &:before{
        content:"";
        position:absolute;
        bottom:-10px;
        left:0;
        width:20px;
        height:20px;
        background-color:hotpink;
        transition:all .5s ease;
        border-radius:50px;
      }
    }
`

export default Heading
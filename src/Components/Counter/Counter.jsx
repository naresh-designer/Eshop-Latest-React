// import React from 'react'
import CountUp from 'react-countup';
import styled from 'styled-components'

const Counter = () => {
  return (
    <Main>
        <div className="main__wrapper">
            <div className="grid grid__four counter">
                <div>
                    100+
                    <p>Happy Client</p></div>
                <div>500+ <p>order completed this year</p></div>
                <div>2350+ <p>items in our catalog</p></div>
                <div>45+ <p>countries we ship</p></div>
            </div>
        </div>
    </Main>
  )
}
const Main = styled.section`
    background-color:hsl(0deg 0.37% 28.86%);
    padding:50px 0;
    margin-block-start:80px;
    text-align:center;
    font-size:5rem;
    color:hsl(0deg 0% 54.98%);

    p{
        font-size:1.5rem;
        color:hsl(0deg 0% 54.98%);
        margin-bottom:0;
    }
`

export default Counter
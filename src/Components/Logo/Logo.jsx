import React from 'react'
import { BiSolidShoppingBags } from "react-icons/bi"
import styled from 'styled-components'

const Logo = ({className}) => {
  return (
    <Main>
        <BiSolidShoppingBags className='shopping__bag' />
        <div className={`logo ${className}`}>E-<span>shop</span></div>
    </Main>
  )
}

const Main = styled.section`
display:flex;
    align-items:center;
    font-size:30px;
    color:${({theme}) => theme.common.grayColor };
    font-family:${({theme}) => theme.common.merriweatherFont };
    margin-block:15px;

    .shopping__bag{
        font-size:40px;
        animation: logoAnim .6s infinite alternate-reverse;
        
        @keyframes logoAnim {
            0%{
                transform: scale(.9);
            }
            100%{
                transform: scale(1);
            }
        }
    }
        

    .logo{
        color:${({theme}) => theme.common.blackColor };
    }
`

export default Logo
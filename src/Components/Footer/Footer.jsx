import React from 'react'
import styled from 'styled-components'
import Logo from '../Logo/Logo'
import Nav from '../Nav/Nav'
import SocialIcon from '../SocialIcon/SocialIcon'
import Offter from '../Offer/Offter'
import TopButton from '../TopButton/TopButton'

const Footer = () => {
  return (
    <Main>
        <Offter/>
        <div className="main__wrapper">
            <div className="footer">
                <Logo className="footer_logo" />
                <Nav />
                <SocialIcon/>
            </div>

            <div className="copyright">
            <p>Copyright © {new Date().getFullYear()} | E-shop</p>
            <p>All rights reserved</p>
            </div>
        </div>
        <TopButton/>
    </Main>
  )
}

const Main = styled.footer`

    background-color:${({theme}) => theme.common.blackColor };
    padding:50px 0 50px;
    margin-top:100px;

    .footer_logo{
        color:${({theme}) => theme.common.whiteColor } !important;
    }

    .footetNav a{
        color:${({theme}) => theme.common.whiteColor };
    }

    .footer{
        display:flex;
        justify-content:space-between;
        align-items:center;
        border-bottom:1px solid ${({theme}) => theme.common.whiteColor };
        padding:30px 0;
        margin-bottom:20px;
    }
    .copyright{
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin-bottom:20px;

        p{
            color:${({theme}) => theme.common.whiteColor };
        }
    }

    @media(width <= 550px){
    .footer{
        flex-direction:column;
        flex-wrap:wrap;
    }

    nav{
       display:none;
    }
    .copyright{
        flex-direction:column;
        flex-wrap:wrap;

        p{
            color:${({theme}) => theme.common.whiteColor };
        }
    }
    }
`

export default Footer
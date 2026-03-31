// import React, { useEffect, useState } from 'react'
import Nav from '../Nav/Nav'
import styled from 'styled-components'
import Logo from '../Logo/Logo'

const Header = () => {

  return (
    <Main>
          <div className='header'>
            <Logo/>
            <Nav/>
          </div>
    </Main>
  )
}

const Main = styled.header`
position:fixed;
z-index:1;
top:0;
width:100%;
background-color:#f8f6f3;
    .header{
      display:flex;
      justify-content:space-between;
      align-items:center;
      padding-block:10px;
      transition:all .5s ease;
      width:100%;
background-color:#f8f6f3;
    }

`

export default Header
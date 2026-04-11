import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Breadcrumb = ({curElm}) => {
  return (
    <Main>
        <div className="breadcrumb">
        <div className="main__wrapper">
            <NavLink to='/product'>Products</NavLink> / {curElm.title}
        </div>
        </div>
    </Main>
  )
}
const Main = styled.section`

.breadcrumb{
    background-color:#F3F6F6;
    padding:20px;
    font-style:italic;
    text-transform:capitalize;
    font-size:15px;
  
    a{
      border-right:2px solid black;
      padding-right:10px;
      margin-right:7px;
      color:${({theme}) => theme.common.greenBg };
    }
`

export default Breadcrumb
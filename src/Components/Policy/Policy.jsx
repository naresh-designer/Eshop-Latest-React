import React from 'react'
import PolicyList from './PolicyList'
import styled from 'styled-components'

const Policy = () => {
  return (
    <Main>
        <PolicyList/>
    </Main>
  )
}

const Main = styled.section`
    background-color:#f8f6f3;
    padding:40px 0;
    // background-image:url('/work/shop/Images/policy.jpg');
    // height:40vh;
    // width:100%;
    // background-size:cover;
    // background-position:center;
    // background-repeat:no-repeat;
    // background-attachment:fixed;
    // position:relative;

    // &:before{
    //     content:'';
    //     position:absolute;
    //     top:0;
    //     left:0;
    //     width:100%;
    //     height:100%;
    //     background-color:rgba(0,0,0,.7);
    // }
    
`

export default Policy
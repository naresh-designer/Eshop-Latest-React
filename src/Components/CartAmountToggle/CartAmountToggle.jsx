import React from 'react'
import styled from 'styled-components'
import { FaPlus,FaMinus } from "react-icons/fa6";

const CartAmountToggle = ({amount,setIncerement,setDecrement}) => {
  return (
    <Main>
        <button onClick={setDecrement}><FaMinus /></button>
        <div>{amount}</div>
        <button onClick={setIncerement}><FaPlus /></button>
    </Main>
  )
}
const Main = styled.div`
    display:flex;
    align-items:center;
    gap:15px;

    button{
        background-color:${({theme}) => theme.common.orangeColor };
        border:none;
        cursor:pointer;
        width:30px;
        height:30px;
        display:flex;
        justify-content:center;
        align-items:center;
        border-radius:50px;
        color:${({theme}) => theme.common.whiteColor };
    }
`

export default CartAmountToggle
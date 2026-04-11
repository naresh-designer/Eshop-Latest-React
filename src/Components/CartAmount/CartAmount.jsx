
import { useState } from 'react'
import styled from 'styled-components'
import { FiPlus, FiMinus } from "react-icons/fi";

const CartAmount = () => {
    const [amount,setAmount]=useState(1)

    const setIncre = () => {
        setAmount(amount + 1)
    }

    const setDecre = () => {
        if(amount > 1){
          setAmount(amount - 1)
        }
    }
  return (
    <Main>
    <div className='card_amount' >
        <div onClick={()=>setDecre()} className='icon' ><FiMinus /></div>
        <div className='amount' >{amount}</div>
        <div  onClick={()=>setIncre()}  className='icon' ><FiPlus /></div>
    </div>
    </Main>
  )
}

const Main = styled.section`
margin-left:auto;
margin-right:auto;
  .card_amount{
    display:flex;
    justify-content:center;

    .amount{
      margin-left:15px;
      margin-right:15px;
    }

      .icon{
        cursor:pointer;
        transition:all .5s;

       

        .icon_bg{
          color:${({theme}) => theme.common.whiteColor };
        }        
      }
  }`

export default CartAmount
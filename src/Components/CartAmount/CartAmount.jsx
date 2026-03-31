// import React, { useState } from 'react'
import styled from 'styled-components'
import { FaMinus,FaPlus } from 'react-icons/fa'
import { useContext } from 'react'
import { AppContext } from '../../Context/Context'

const CartAmount = () => {
    const{dispatch,cart}=useContext(AppContext)
    // const [amount,setAmount]=useState(0)
    // const setIncre = ()=>{
    //     setAmount(amount + 1)
    // }
    // const setDecre = () =>{
    //     if(amount > 0){
    //         setAmount(amount - 1)
    //     }
    // }
  return (
    <Main>
    <div className='card_amount' >
        <div onClick={()=>dispatch({type:'DECREASE',payload:cart})} className='icon' ><FaMinus className='icon_bg' /></div>
        <div className='amount' >{cart.length}</div>
        <div onClick={()=>dispatch({type:'INCREASE',payload:cart})} className='icon' ><FaPlus className='icon_bg' /></div>
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
    margin-top:30px;

    .amount{
      margin-left:15px;
      margin-right:15px;
    }

      .icon{
        background-color:${({theme}) => theme.common.blackColor };
        width:30px;
        height:30px;
        border-radius:100px;
        display:grid;
        place-items:center;
        cursor:pointer;
        transition:all .5s;

        &:hover{
          background-color:${({theme}) => theme.common.orangeColor };
        }

        .icon_bg{
          color:${({theme}) => theme.common.whiteColor };
        }        
      }
  }`

export default CartAmount
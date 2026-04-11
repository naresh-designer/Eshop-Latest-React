import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CartIcon = ({cart}) => {
  return (
    <Main>
        <Link to='/cart'>
        <div className='carticon'>
            <FaShoppingCart />
            {
                cart.length > 0 ? <div className="showCart">{cart.length}</div> : ''
            }
        </div>
        </Link>
    </Main>
  )
}

const Main = styled.section`
    .carticon{
        position:relative;
        margin-inline-start:20px;
    }
    .showCart{
        position:absolute;
        top:-25px;
        right:-15px;
        background-color:black;
        color:#fff;
        width:30px;
        height:30px;
        border-radius:50px;
        display:grid;
        place-items:center;
        font-size:15px;
    }

    @media(width <= 768px){
        .carticon{
            margin-inline-end:60px;
        }
    }
        
    `

export default CartIcon
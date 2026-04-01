import React, { useContext, useState } from 'react'
import { navData } from './navData'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { AppContext } from '../../Context/Context'
import { FaCartShopping } from "react-icons/fa6"

const Nav = () => {
    const [navShow, setNavShow ] = useState(false)
    const{cart}=useContext(AppContext)

  return (
    <Main>
        <div className={`nav ${navShow ? 'show' : ''}`}>
        <ul >

          {
            navData.map( (curElm,id) => {
              const{path,name}=curElm
              return (
                <li key={id} >
                  <NavLink to={path} className={({ isActive }) => isActive ? 'active' : '' } onClick={() => setNavShow(prev => !prev) } >{name}</NavLink>
                </li>
              )
            } )
          }

        </ul>


        
          <div className="cart">
          
          <NavLink to='/cart'><div className={cart.length > 0 ? 'cart__addProduct' : 'cart__none'}><FaCartShopping />
            <div className='icon'>
            {cart.length}
              </div>
              </div>
              </NavLink>
          </div>

        <div className={`toggle_button ${navShow ? 'changeToggle' : ''} `} onClick={() => setNavShow(!navShow)}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    
    </Main>
  )
}

const Main = styled.nav`

font-family:${({theme}) => theme.common.merriweatherFont };
.nav{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-block:30px;
    position:relative;
    z-index:1;
  }
ul{
  display:flex;
  gap:30px;
  place-items:center;

  li{

    a{
      color:${({theme}) => theme.common.grayColor };
      transition:all .5s;
      text-transform:lowercase;
      font-size:20px;

      &:hover{
        color:${({theme}) => theme.common.orangeColor };
        letter-spacing:5px;
      }

      
    }
  }
}

.active{
  color:${({theme}) => theme.common.greenBg };
  letter-spacing:5px;
  border-bottom:2px solid ${({theme}) => theme.common.greenBg };
}

.toggle_button{
  cursor:pointer;
  position:fixed;
  right:20px;
  top:40px;
  z-index:1;
  display:none;

      .line{
          background-color:${({theme}) => theme.common.greenBg };
          width:40px;
          height:3px;
          margin-bottom:5px;
          transition:all .5s;

          &:nth-child(2){
              width:30px;
          }

          &:nth-child(3){
              width:20px;
          }
      }
          &:hover .line:nth-child(2),&:hover .line:nth-child(3){
              width:40px;
          }
  }

@media screen and (max-width:${({theme}) => theme.mobile.tab }) {
  .toggle_button{
    display:block;
    position:fixed;
  }

  ul{
    position:fixed;
    top:0;
    right:-100%;
    background-color:black;
    height:100vh;
    width:50%;
    transition:all .5s ease;
    z-index:1;
    padding-top:100px;
    flex-direction:column;
    gap:50px;

    li{
      width: 100%;
      display: flex;
      justify-content: center;

      a{
        font-size:25px;
        color:${({theme}) => theme.common.whiteColor };

      &:hover{
        text-transform:lowercase;
        letter-spacing:10px;
      }
      }
    }
  }

  .show ul{
    right:0;
  }

  .changeToggle{
    // border:1px solid ${({theme}) => theme.common.greenBg };

    .line{
      &:nth-child(1){
        transform:translateY(6px) rotate(45deg);
        background-color:${({theme}) => theme.common.greenBg };
      }
      &:nth-child(2){
        display:none
      }
      &:nth-child(3){
        width:40px;
        transform:rotate(-45deg);
        background-color:${({theme}) => theme.common.greenBg };
      }
    }
  }



  .cart{
    margin-right:50px;
  }
}

.cart{
    position:relative;
    font-size:20px;
    margin-left:20px;
    transition:all .5s;
    animation:fade .5s ease;
    
    @keyframes fade {
        0%{
            opacity:0;
        }
        100%{
            opacity:1;
        }
    }

    a{
    color:${({theme}) => theme.common.grayColor };
    }

    .cart__addProduct{
      display:grid;
      align-items:center;
      text-align:center;
      position:relative;
      margin-right:20px;
      width:40px;

      .icon{
        position:absolute;
        top:-20px;
        right:0px;
        border-radius:50px;
        width:30px;
        height:30px;
        background-color:${({theme}) => theme.common.greenBg };
        display:grid;
        place-items:center;
        font-size:16px;
        color:${({theme}) => theme.common.whiteColor };
      }
    }
  }

  .cart__none{
    display:none;
  }

@media screen and (max-width:${({theme}) => theme.mobile.smallM }){
  ul{
    width:100%;
  }
}
  

`

export default Nav
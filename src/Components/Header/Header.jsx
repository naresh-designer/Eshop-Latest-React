
import { useContext, useEffect, useState } from 'react'
import Nav from '../Nav/Nav'
import styled from 'styled-components'
import Logo from '../Logo/Logo'
import { AppContext } from '../../Context/Context'

const Header = () => {
  const[open,setOpen]=useState(false)
  const[sticky,setSticky]=useState(false)
  const{cart}=useContext(AppContext)

  const handleHeader = () => {
    if(document?.documentElement?.scrollTop > 100){
      setSticky(true)
    }else{
      setSticky(false)
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll',handleHeader)
  })

  useEffect(()=>{
    if(cart.length > 0){
      setOpen(true)
      setTimeout(()=>{
        setOpen(false)
      },1500)
    }
  },[cart])

  return (
    <Main>
          <div className={sticky === true ? 'header sticky' : 'header'} >
            <Logo/>
            <Nav/>
          </div>
          {
            open && <div className='module'>sucsessfully added to cart ({cart.length}) items</div> 
            
          }
    </Main>
  )
}

const Main = styled.header`
.sticky{
  position:fixed;
  top:0;
  z-index:999;
  width:100%;
  background-color:#f8f6f3;
  transition:all .5s ease-in-out;
  animation:headerAnim .5s ease-in-out ;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  border-bottom:1px solid #ccc;
  box-shadow:0 0 10px rgba(0,0,0,.5);
  
  }

  .sticky .logo{
    color:${({theme}) => theme.common.blackColor };
  }

  @keyframes headerAnim {
    0%{
      -webkit-transform:translate3d(0,-100%,0);
      transform:translate3d(0,-100%,0);
    }
    100%{
      -webkit-transform:none;
      transform:none;
    }
}
    .header{
      display:flex;
      justify-content:space-between;
      align-items:center;
      padding-block:10px;
      padding-inline:20px;
      transition:all .5s ease;
      width:100%;
      background-color:#f8f6f3;
    }

    .module{
      position:fixed;
      top:0;
      left:0;
      z-index:999;
      width:100%;
      padding-block:10px;
      background-color:${({theme}) => theme.common.grayColor };
      color:${({theme}) => theme.common.whiteColor };
      text-align:center;
      text-transform:lowercase;
      animation:module .5s ease-in-out ;
      font-size:20px;
      padding-block:20px;

      @keyframes module {
        0%{
          opacity:0;
          transform:translateY(-100%);
        }
        100%{
        opacity:1;
          transform:translateY(0);
        }
      }
    }

`

export default Header
import React, { useState } from 'react'
import styled from 'styled-components'
import { RiLoginCircleLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import Button from '../assets/Styled/ButtonStyle';
import SignUp from '../Components/SignUp/SignUp';
import LoginCard from '../Components/LoginCard/LoginCard';

const Login = () => {
    const[loginIcon,setLoginIcon] = useState(false);
    const[loginCard,setLoginCard] = useState(false);
  return (
    <Main>
        <div className="login_icon" onClick={() => setLoginIcon(!loginIcon) }>
            <RiLoginCircleLine />
        </div>

        {
            loginIcon ?  <div className='login__card'>
                <div className="button">
                   <div> 
                    <Button className={loginCard ? '' : 'active'} onClick={()=>setLoginCard(!loginCard)}>Login</Button>
                    <Button className={loginCard ? 'active' : ''} onClick={()=>setLoginCard(!loginCard)}>Sign Up</Button></div>
                   <div onClick={() => setLoginIcon(!loginIcon) }><Button><IoClose /></Button></div>
                </div>

                <div className="login__card__container">

                    {
                        loginCard ? <SignUp/> : <LoginCard loginCard={loginCard} setLoginCard={setLoginCard}/>
                    }
                    
                    
                </div>
            </div> : ''
        }


       

    </Main>
  )
}

const Main = styled.section`
    .login_icon{
        position:fixed;
        top:50%;
        right:0;
        transform:translateY(-50%) rotate(90deg);
        z-index:999;
        background-color:${({theme}) => theme.common.grayColor };
        padding:10px 10px 5px;
        font-size:30px;
        cursor:pointer;
        color:${({theme}) => theme.common.whiteColor };
        transition:all .5s;

        &:hover{
            background-color:${({theme}) => theme.common.orangeColor };
        }
    }

    .login__card{
        position:fixed;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        width:50%;
        z-index:999;
        animation:loginAnim .5s ease-in-out;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;

        @keyframes loginAnim {
            0%{
                opacity:0;
                scale:.7;
            }
            100%{
                opacity:1;
                scale:1;
            }
        }

        .button{
            display:flex;
            justify-content:space-between;
            align-items:center;

        button{
            margin-block:0px;

            &:hover{
                background-color:#f1f1f1;
                border:1px solid #f1f1f1;
                scale:1;
            }
        }
        }

        .login__card__container{
            padding:20px;
            background-color:#f1f1f1;
            box-shadow:inset 0px 0px 30px rgba(0,0,0,.5);
        }
    }
        .active{
            background-color:#f1f1f1;
            border:1px solid #f1f1f1;
            scale:1;
            color:black;
        }

        @media(width <= 750px){
            .login__card{
                width:80%;
            }
        }
`

export default Login
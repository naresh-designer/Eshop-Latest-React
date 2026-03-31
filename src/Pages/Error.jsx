import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { BsSignDoNotEnter } from 'react-icons/bs'
import Button from '../assets/Styled/ButtonStyle'

const Error = () => {
  return (
    <Main>
      <div className="main__wrapper">
        <div className="errorPage">
              <div className='errorPage__notenter' ><BsSignDoNotEnter /></div>
              <div className="errorPage__heading">
                  404
                  <h1>Page Not Found</h1>
              </div>
              <NavLink to='/' >
                  <Button>Home</Button>
              </NavLink>
          </div>
      </div>
    </Main>
  )
}

const Main = styled.section`
    margin-top:50px;
    margin-bottom:50px;
    .errorPage{
        text-align:center;

        .errorPage__notenter{
            font-size:200px;
        }

        .errorPage__heading{
            font-size:120px;
            line-height:80px;
            color:rgb(215,212,208);
        }

        .errorBtn{
            justify-content:center;
            margin-top:50px;

            a{

                &:hover{
                    background-color:${({theme}) => theme.common.greenBg };
                    color:${({theme}) => theme.common.whiteColor };
                }
            }
        }

    }`

export default Error
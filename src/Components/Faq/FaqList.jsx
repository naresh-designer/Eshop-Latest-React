import React, { useState } from 'react'
import styled from 'styled-components'
import { IoIosArrowDown } from 'react-icons/io'

const FaqList = ({products}) => {
  const[showData,setShowData]=useState(false)

  const faqToggle = (i) => {
    if(showData === i){
        return setShowData(false)
    }
    setShowData(i)
}

  return (
    <Main>
      <ul>
       {
        products.slice(3,8).map((curElm,i)=>{
          return(
            <li>
                <div className={`faq ${showData === i ? 'select' : ''} `} onClick={() => faqToggle(i) } >
                    <div className="faq__header">
                        <h6>{curElm.category}</h6>
                        <IoIosArrowDown/>
                    </div>
                    <div className={`faq__content ${showData === i ? 'show__content' : ''} `}>
                     <div> {curElm.description}</div>
                      </div>
                </div>
            </li>
          )
        })
       }
       </ul>
    </Main>
  )
}

const Main =styled.section`
    ul{

        li{
            width:50%;
            margin:auto;
            animation:faq .5s ease;
            animation-timeline: view();
            animation-range:entry 0 cover 40%;

            @keyframes faq {
                0%{
                    scale:.7;
                }
                100%{
                    scale:1;
                }
            }

            .faq{
                background-color:#e4e8e8;
                padding:20px 30px;
                margin-top:20px;
                cursor:pointer;
                transition:all .5s ease-in-out;

                .faq__header{
                    display:flex;
                    justify-content:space-between;
                    align-items:center;

                    h6{
                        text-transform:capitalize;
                    }
                }

                .faq__content{
                    padding-top:10px;
                    display:grid;
                    grid-template-rows:0fr;
            transition: all .3s ease-in-out;

                    > div{
                      overflow:hidden;
                    }
                }

                .show__content{
                    grid-template-rows:1fr;
                }
            }
            .select{
                background-color:black;
                color:#fff;
                transition:all .5s ease-in-out;

                svg{
                    transform:rotate(180deg);
                }
            }
        }
    }

    @media(width <= 500px){
        ul{
            li{
                width:90%;
            }
        }
    }
`

export default FaqList
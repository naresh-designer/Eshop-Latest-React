import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const getData = () => {
    const localData = localStorage.getItem('myReview')
    if(localData){
        return JSON.parse(localData)
    }else{
        return []
    }
}

const ClientReview = () => {
    const[inputValue,setInputValue]=useState('')
    const[items,setItem]=useState(getData())


    const handleSubmit = () =>{
        if(!inputValue){
            alert('Please Enter Vaild Review')
        }else{
            setItem([...items,inputValue])
            setInputValue('')
        }
    }

    useEffect(()=>{
        localStorage.setItem('myReview',JSON.stringify(items))
        return(()=>{
            localStorage.removeItem('myReview')
        })
    },[items])

  return (
    <Main>
       <div className="review">
        <h6>Client Review</h6>

        <form onSubmit={(e)=>handleSubmit(e.preventDefault())}>
            <input type="text" placeholder='Enter Keyword' value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
        </form>

        <div className="container">
            {
                items.map((curElm,id)=>{
                    return(
                        <p key={id} className='container__review'>{curElm} <span>Delete</span> </p>
                    )
                })
            }
            
        </div>
       </div>
    </Main>
  )
}

const Main = styled.section`
    .review{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin: 2rem 0;

        h6{
            font-size: 1.2rem;
            font-weight: 600;
        }

        form{
            input[type="text"]{
                width: 100%;
                padding: 15px 10px;
                border: 1px solid #ccc;
                border-radius: 5px;
                color:#333;
            }
        }

        .container__review{
            background-color:#f1f1f1;
            border-bottom:1px solid #ccc;
            padding:10px;
            margin-bottom:0px;
            letter-spacing:2px;

            &:nth-child(even){
                background-color:#fff;
            }
        }
    }
`

export default ClientReview
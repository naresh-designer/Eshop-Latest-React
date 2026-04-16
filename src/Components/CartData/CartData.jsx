import React, { useContext, useState} from 'react'
import styled from 'styled-components'
import { AiFillDelete } from "react-icons/ai"
import { AppContext } from '../../Context/Context'
import CartAmountToggle from '../CartAmountToggle/CartAmountToggle'

const CartData = ({data}) => {
  const[amount,setAmount]=useState(1)
  const{dispatch}=useContext(AppContext)

  const setIncerement=()=>{
    if(amount < data.stock){
        setAmount(amount + 1)
    }
}
const setDecrement=()=>{
    if(amount>1){
        setAmount(amount-1)
    }
}
  return (
    <Main>
    <div className='cart_items__list grid grid__five' >
        <div className='car_image__name' >
            <div className='hide' >
            <figure>
                <img src={data.thumbnail} alt={data.id} />
            </figure>
            </div>
            <div>
                <p>{data.title}</p>
            </div>
        </div>

        {/* Price */}
        <p className='hide' >&#8377;{data.price / 1}</p>

        {/* Quantity */}
       <div className="incDec">
       <CartAmountToggle amount={amount} setIncerement={setIncerement} setDecrement={setDecrement}/>
       </div>

        {/* Sub Total */}
        <p className='hide' >&#8377;{data.price * amount}</p>

        {/* Remove */}
        <div className='remove_items'>
        <p ><AiFillDelete onClick={()=>dispatch({type:'REMOVE',payload:data})}  /></p>
        </div>
    </div>
    </Main>
  )
}
const Main = styled.section`
`

export default CartData
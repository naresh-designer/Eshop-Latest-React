import React, { useContext } from 'react'
import styled from 'styled-components'
import { AiFillDelete } from "react-icons/ai"
import CartAmount from '../CartAmount/CartAmount'
import { AppContext } from '../../Context/Context'

const CartData = ({data}) => {
  const{dispatch}=useContext(AppContext)
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
        <p className='hide' >{data.price}</p>

        {/* Quantity */}
       <div className="incDec">
        <CartAmount/>
       </div>

        {/* Sub Total */}
        <p className='hide' >{data.price}</p>

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
import React, { useContext } from 'react'
import styled from 'styled-components'
import Button from '../../assets/Styled/ButtonStyle'
import { Link } from 'react-router-dom'
import { AppContext } from '../../Context/Context'

const CartTotal = () => {
  const {dispatch} = useContext(AppContext)
  return (
    <Main>
        <div className="button__cart">
        <Link to='/product'><Button>Continue Shopping</Button></Link>
        <Link><Button onClick={()=>dispatch({type:'CLEAR_CART'})} >Clear Cart</Button></Link>
        </div>
        
        <div className="cart__total">
                <div className="cart__total__left">
                    <p>Subtotal</p>
                    <p>Total</p>
                </div>
                <div className="cart__total__right">
                    <p>$ {}</p>
                    <p>$ {}</p>
                </div>
            </div>
    </Main>
  )
}

const Main = styled.section`
.button__cart{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-inline-start:auto;

}
`

export default CartTotal
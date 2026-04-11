import React from 'react'
import styled from 'styled-components'
import Button from '../../assets/Styled/ButtonStyle'
import { Link } from 'react-router-dom'

const CartTotal = () => {
  return (
    <Main>
        <div className="button__cart">
        <Link to='/product'><Button>Continue Shopping</Button></Link>
        <Link><Button>Clear Cart</Button></Link>
        </div>
        
        <div className="cart__total">
                <div className="cart__total__left">
                    <p>Subtotal</p>
                    <p>Shipping</p>
                    <p>Estimate Tax</p>
                    <p>Total</p>
                </div>
                <div className="cart__total__right">
                    <p>$ 0.00</p>
                    <p>$ 0.00</p>
                    <p>$ 0.00</p>
                    <p>$ 0.00</p>
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
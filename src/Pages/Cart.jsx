

import { useContext } from 'react'
import CartData from '../Components/CartData/CartData'
import styled from 'styled-components'
import { AppContext } from '../Context/Context'
import { Link } from 'react-router-dom'
import Button from 'styled-components'


const Cart = () => {
    const{cart}=useContext(AppContext)


    if(cart.length === 0){
      return(
        <div className='cartList' style={{width:'100%',height:'calc(100vh - 30vh)',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'5rem',textTransform:'lowercase',textAlign:'center'}}>
       <div>
        Cart List is Empty
        <p><Link to='/product' style={{fontSize:'2rem',cursor:'pointer',color:'hotpink',textDecoration:'underline',textTransform:'lowercase'}} >Continue Shopping</Link></p>
        </div>
        
        </div>
      )
  }
  return (
    
    <Main>

<div className="main__wrapper">
            <div className='cart__list grid grid__five' >
                <p>Item</p>
                <p className='hide' >Price</p>
                <p>Quantity</p>
                <p className='hide' >SubTotal</p>
                <p>Remove</p>
            </div>
            <hr/>

            <div className="cart__items">
                {
                    cart.map((curElm) => {
                        return <CartData key={curElm.id} data={curElm} />
                    } )
                }
            </div>
            <hr/>

                <div className='cart_two__button' > 
                    <Link to='/product' >
                        <Button>Continue Shopping</Button>
                    </Link>
                </div>

            
        </div>
        
    </Main>
  )
}
const Main = styled.section`
padding-block:150px;




.cartList{
  width:100%;
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
}



.cart__list{
    p{
        text-align:center;
    }
}
    .car_image__name{
        display:flex;
        gap:10px;
        padding-left:10px;
    }
    .car_image__name img{
        width:80px;
        display:inline;
    }

    .cart_items__list{
        padding-block:30px;
        background-color:#f8f6f3;
    }

    .cart_items__list p{
        text-align:center;
    }

    .color_div{
        display:flex;
        place-items:center;
        gap:5px;
    }
        
    .color_div p{
        margin-bottom:0;
    }

    .color-style{
        --colorWh:15px;
        width:var(--colorWh);
        height:var(--colorWh);
        border-radius:100px;
    }

    .cart_items__amount{
        margin-inline:auto;
    }

    .card_amount{
        margin-top:0;
    }

    .remove_items{
        cursor:pointer;
    }

    .remove_items svg{
        color:red;
    }

    .cart_two__button{
        display:flex;
        justify-content:space-between;
        flex-wrap:wrap;
    }

    .red_button{
        background-color:red;
        border:red;
    }
        
    .order_total__amount{
        background-color:#f8f6f3;
        max-width:400px;
        padding:50px 30px 30px;
    }

    .order_total_subdata div{
        display:flex;
        justify-content:space-between;
    }

    .order_total_subdata hr{
        margin-block:10px;
    }

    @media(width <= 500px){
        .grid__five{
            grid-template-columns:repeat(3, 1fr);
        }
        .hide{
            display:none;
        }
        
    }
`

export default Cart
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from '../../assets/Styled/ButtonStyle'

const Offter = () => {
  return (
    <Main>
        <div className="main__wrapper offer_container ">
            <div className="offer">
                <h3>Get 25% Off On Your First Purchase!</h3>
                <Link to='/product' >
                <Button>
                    Shop
                </Button>
                </Link>
            </div>
        </div>
    </Main>
  )
}
const Main = styled.section`

    .offer_container{
        background-color:#F3F6F3;
        color:${({theme}) => theme.common.blackColor };
        transform: translateY(-125px);
        border-radius: 10px;
        max-width: 1000px;
        padding-top: 50px;
        padding-bottom: 50px;
    }

    .offer{
        display:flex;
        justify-content:space-between;
        align-items:center;
    }

    @media(width <= 450px){
        .offer{
            flex-wrap:wrap;
        }
    }
`

export default Offter
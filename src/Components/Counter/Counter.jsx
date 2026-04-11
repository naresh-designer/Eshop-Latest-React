

import styled from 'styled-components'

const Counter = () => {
  return (
    <Main>
        <div className="banner" style={{backgroundImage:`url(/work/shop/Images/bg.jpg)`}}>
        <div className="banner__container">
            <div className="grid grid__four counter">
                <div>
                    100+
                    <p>Happy Client</p></div>
                <div>500+ <p>order completed this year</p></div>
                <div>2350+ <p>items in our catalog</p></div>
                <div>45+ <p>countries we ship</p></div>
            </div>
            </div>
        </div>
    </Main>
  )
}
const Main = styled.section`
    text-align:center;
    font-size:5rem;
    color:hsl(0deg 0% 54.98%);
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;

    p{
        font-size:1.5rem;
        color:hsl(0deg 0% 54.98%);
        margin-bottom:0;
    }
    .banner{
        width:100%;
        height:400px;
        background-size:cover;
        background-position:center;
        background-repeat:no-repeat;
        background-attachment:fixed;
    }

    .banner__container{
        background-color:rgba(0,0,0,.7);
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
    }

    @media(width <= 650px){
        font-size:2.5rem;
    }
`

export default Counter


import styled from 'styled-components'
import { useContext } from 'react'
import { AppContext } from '../../Context/Context'
import Button from '../../assets/Styled/ButtonStyle'
import { Link } from 'react-router-dom'

const Card = ({curElm}) => {
    const {dispatch} = useContext(AppContext)
  return (
    <Main>
        <div className='productCard' >
            <figure className='productCard__img'>
                <img src={curElm.thumbnail} alt={curElm.title} />
                <figcaption className='productCard__cation' ><h3>{curElm.category}<p>{curElm.brand}</p></h3></figcaption>
            </figure>
            <div className='productCard__content' >
                <div className='productCard_category' >
                <h5>{curElm.title}</h5>
                </div>
            </div>
            <div className="button__group">
            <Button onClick={()=>dispatch({type:'ADD_CART', curProduct:curElm})}>Add Cart</Button>
            <Link to={`/details/${curElm.id}`}><Button>Details</Button></Link>
            </div>
        </div>
    </Main>
  )
}

const Main = styled.section`



    background-color:#f1f1f1;
margin-top:30px;

.productCard{
    overflow:hidden;
    text-transform:capitalize;
    animation:fade .5s ease;
    animation-timeline: view();
    animation-range:entry 0 cover 40%;
}
    @keyframes fade {
        0%{
            transform:scale(.7);
        }
        100%{
            transform:scale(1);
        }
    }
}

.productCard__img{
    transition:all .5s;
    filter: grayscale(100%);
    position:relative;

    img{
        width:100%;
        aspect-ratio:8/8
    }

    &:hover{
        filter: grayscale(0);
    }

    &:before{
        content:'';
        position:absolute;
        top:0;
        left:-100%;
        background-color:rgba(0,0,0,.4);
        height:100%;
        width:100%;
        transition:all .8s;
        
    }

    &:hover:before{
        left:100%;
    }

    .productCard__cation{
        position:absolute;
        top:20px;
        right:20px;
        background-color:rgba(255,255,255,.7);
        padding:15px 20px 10px;
        border-radius:100px;

        h3{
            font-size:15px;
            font-weight:normal;
            transition:all .5s;
            text-transform:lowercase;

            p{
            margin:0;
            padding:0;
            }
        }

        &:hover{
            letter-spacing:1px;
        }
    }
}

.button__group{
    display:flex;
    justify-content:center;
    gap:20px;
}

.productCard__content{
    display:flex;
    justify-content:space-between;
    padding:20px;
    background-color:#F3F6F6;

    .productCard_category{
        color:${({theme}) => theme.common.blackColor };


        h5{
            font-size:20px;
            font-weight:normal;
            text-transform:lowercase;
        }
    }

    h6{
        font-size:16px;
        color:${({theme}) => theme.common.greenBg };
    }
}

`

export default Card
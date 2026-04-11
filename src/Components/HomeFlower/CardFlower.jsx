import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const CardFlower = ({curElm}) => {
  return (
    <Main>
        
        <div className="grid grid__flower">
            {
                curElm.slice(0,5).map((curElm)=>{
                    return(
                        <section>
                            <Link to={`/details/${curElm.id}`}>
                                <figure>
                                    <img src={curElm.thumbnail} alt="" />
                                    <figcaption className='productCard__cation' ><h3>{curElm.category}<p>{curElm.brand}</p></h3></figcaption>
                                </figure>
                            </Link>
                        </section>
                    )
                })
            }
        </div>
        
    </Main>
  )
}

const Main = styled.section`
.grid{
    gap:0px;
}
.grid__flower{
    grid-template-columns:repeat(4,1fr);
    grid-auto-flow: dense;
    gap:10px;
    display:grid;

    figure{
        overflow:hidden;
        position:relative;
    }

    img{
        width:100%;
        aspect-ratio: 1/1;
        object-fit:cover;
        transition:all .5s;
        filter:grayscale(100%);
        position:relative;

        &:hover{
            transform:scale(1.1);
            filter:grayscale(0);
        }
    }

    & section:nth-child(1){
        grid-column:span 1;
        grid-row:span 1;
    }
    & section:nth-child(2){
        grid-column:span 2;
        grid-row:span 3;
    }
    & section:nth-child(3){
        grid-column:span 1;
        grid-row:span 1;
    }
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



    @media(width <= 760px){
        .grid__flower{
        
            & section:nth-child(1){
                grid-column:span 2;
            }
            & section:nth-child(2){
                grid-column:span 2;
                grid-row:span 1;
            }
            & section:nth-child(3){
                grid-column:span 4;
            }

            & section:nth-child(4){
                grid-column:span 2;
            }
            & section:nth-child(5){
                grid-column:span 2;
            }
        }
           
    }
`

export default CardFlower
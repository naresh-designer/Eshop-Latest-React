

import styled from 'styled-components'
import { Link } from 'react-router-dom'
import AddCard from '../AddCard/AddCard'
import Button from '../../assets/Styled/ButtonStyle'
import { MdOutlineFavorite } from "react-icons/md";

const Card = ({curElm}) => {
  return (
    <Main>
        <div className='productCard' >
            <figure className='productCard__img'>
                <img src={curElm.thumbnail} alt={curElm.title} />
                <figcaption className='productCard__cation' ><h3>{curElm.category}<p>{curElm.brand}</p></h3></figcaption>
                <div className="productCard__img__gallery">
                {
                    curElm.images.map((curElm,index)=>{
                        return(
                            <img key={index} src={curElm} alt="" />
                        )
                    })
                }
                </div>
                <div className="favourit">
                    <Link><MdOutlineFavorite /></Link>
                    </div>
            </figure>
            <div className='productCard__content' >
                <div className='productCard_category' >
                <h5>{curElm.title}</h5>
                </div>
            </div>
            <div className="button__group">
                <AddCard curElm={curElm}/>
            
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

        .favourit{
            position:absolute;
            bottom:0;
            right:-100%;
            font-size:30px;
            transition:all .5s;

            a{
                color:${({theme}) => theme.common.orangeColor };
                transition:all .5s;

                &:hover{
                    color:${({theme}) => theme.common.grayColor };
                }
            }
        } 

        &:hover .favourit{
            right:20px;
        }



        .productCard__img__gallery{
            position:absolute;
            top:0;
            left:-100%;
            width:100px;
            height:100%;
            background-color:rgba(0,0,0,.7);
            opacity:0;
            transition:all .5s ease;

            img{
                width:80px;
                aspect-ratio:8/8;
                margin-block:10px;
            }
        }


        &:hover .productCard__img__gallery{
            opacity:1;
            left:0;
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
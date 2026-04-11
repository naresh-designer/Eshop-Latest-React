import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components'
import { Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

const DealsData = ({products}) => {
  return (
    <Main>
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
            clickable: true,
        }}
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
            waitForTransitions: true
        }}
        breakpoints={{
            0: {
            slidesPerView: 1,
            spaceBetween: 20,
            },
            768: {
            slidesPerView: 3,
            spaceBetween: 40,
            },
            1024: {
            slidesPerView: 4,
            spaceBetween: 30,
            },
        }}
        modules={[Autoplay]}
        className="mySwiper"
        >

            {
                products.map((curElm)=>{
                    return(
                        <SwiperSlide>
                            <Link to={`/details/${curElm.id}`}>
                            <div className='productCard' >
                                <figure className='productCard__img'>
                                    <img src={curElm.thumbnail} alt={curElm.title} />
                                    <figcaption className='productCard__cation' ><h3>{curElm.category}<p>{curElm.brand}</p></h3></figcaption>
                                </figure>
                            </div>
                            </Link>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
</Main>
  )
}
const Main = styled.section`


    
margin-top:30px;
margin-bottom:60px;

.productCard{
    overflow:hidden;
    text-transform:capitalize;


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
        padding:10px;
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



.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #444;


   
  
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
    
`

export default DealsData
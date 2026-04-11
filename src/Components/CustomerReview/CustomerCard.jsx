import React from 'react'
import styled from 'styled-components'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay,Keyboard } from 'swiper/modules';
import Star from '../Star/Star';

const CustomerCard = ({womanProduct}) => {
  return (
    <Main>

<Swiper
        slidesPerView={4}
        spaceBetween={30}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            waitForTransitions: true
        }}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
            0: {
            slidesPerView: 1,
            spaceBetween: 40,
            },
            768: {
            slidesPerView: 2,
            spaceBetween: 40,
            },
            1024: {
            slidesPerView: 4,
            spaceBetween: 30,
            },
        }}
        modules={[Autoplay,Keyboard]}
        className="mySwiper"
      >

        {
            womanProduct.map((curElm)=>{
                return(
                    <SwiperSlide key={curElm.id}>
                        <div>
                        <figure>
                        <img src={curElm.thumbnail} alt={curElm.title} />
                        </figure>
                        <p>{curElm.reviews[0].reviewerName}</p>
                        <p>{curElm.reviews[0].reviewerEmail}</p>
                        <p>{curElm.reviews[0].comment}</p>
                        <span><Star rating={curElm.reviews[0].rating}/></span>
                        </div>
                    </SwiperSlide>
                )
            })
        }
      </Swiper>
    </Main>
  )
}
const Main = styled.section`


.swiper {
    width: 100%;
    height: 100%;
    margin-block-start:50px;
  }
  
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background-color:#F3F6F6;
  
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;

    p{
        margin-bottom:0;
    }
  }
`

export default CustomerCard
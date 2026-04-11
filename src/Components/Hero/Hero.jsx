import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide, } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Keyboard,Pagination,Autoplay } from 'swiper/modules';

const Hero = ({heroData}) => {
  return (
    <Main>


<div className="main__wrapper">

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          waitForTransitions: true
        }}
        modules={[Keyboard,Pagination,Autoplay]}
        className="mySwiper"
      >
            <SwiperSlide>
            <div className='hero__container'>
                <figure className="hero__image"> <img src={heroData.img} alt='Hero' /></figure>
                <div className="hero__tagLine">
                <h1>{heroData.pageName}</h1>
                {heroData.heading}
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi iste aspernatur nulla, doloribus nihil voluptatibus laborum. Officiis est animi quasi sed, dolore amet qui? Alias reprehenderit voluptatibus omnis commodi molestias.</p>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='hero__container'>
                <figure className="hero__image"> <img src='/work/shop/Images/about.png' alt='Hero' /></figure>
                <div className="hero__tagLine">
                <h1>{heroData.pageName}</h1>
                {heroData.heading}
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi iste aspernatur nulla, doloribus nihil voluptatibus laborum. Officiis est animi quasi sed, dolore amet qui? Alias reprehenderit voluptatibus omnis commodi molestias.</p>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='hero__container'>
                <figure className="hero__image"> <img src='/work/shop/Images/hero.png' alt='Hero' /></figure>
                <div className="hero__tagLine">
                <h1>{heroData.pageName}</h1>
                {heroData.heading}
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi iste aspernatur nulla, doloribus nihil voluptatibus laborum. Officiis est animi quasi sed, dolore amet qui? Alias reprehenderit voluptatibus omnis commodi molestias.</p>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='hero__container'>
                <figure className="hero__image"> <img src='/work/shop/Images/contact.png' alt='Hero' /></figure>
                <div className="hero__tagLine">
                <h1>{heroData.pageName}</h1>
                {heroData.heading}
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi iste aspernatur nulla, doloribus nihil voluptatibus laborum. Officiis est animi quasi sed, dolore amet qui? Alias reprehenderit voluptatibus omnis commodi molestias.</p>
                </div>
            </div>
            </SwiperSlide>
      </Swiper>


        </div>
    </Main>
  )
}

const Main = styled.section`
display:flex;
justify-content:center;
align-items:center;
    background-image:url('/work/shop/Images/policy.jpg');
    height:90dvh;
    width:100%;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    background-attachment:fixed;
    position:relative;

    &:before{
        content:'';
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background-color:rgba(0,0,0,.8);
    }

.hero__container{
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    place-items:center;
}

.hero__tagLine{
    font-family:${({theme}) => theme.common.merriweatherFont };
    font-size:80px;
    line-height:90px;
    color:rgb(215,212,208);
    animation:hero .5s ease;
    animation-timeline: scroll();
    animation-range:exit 0 cover 40%;
    transform-origin: right;
    border-top:2px solid rgb(215,212,208);
    border-bottom:3px solid ${({theme}) => theme.common.greenBg };
}

    h1{
        color:${({theme}) => theme.common.grayColor };
        font-size:40px;
        font-weight:normal;
    }

    p{
        font-size:20px;
        color:hsl(0deg 0% 54.98%);
    }
}

.hero__image{
    max-width:400px;
    margin:auto;
    scale:1;
    animation:hero .5s ease;
    animation-timeline: scroll();
    animation-range:exit 0 cover 40%;
    transform-origin: left;
}

@keyframes hero {
    0%{
        scale:1;
    }
    100%{
        scale:0;
        opacity:0;
    }
}

@media(width <= ${({theme}) => theme.mobile.tab }){
    .hero__container{
        grid-template-columns: repeat(1, 1fr);
    }

    .hero__image{
        display:none;
    }
}

@media(width <= 650px){

    .hero__tagLine{
        font-size:40px;
        line-height:50px;

        h1{
            font-size:30px;
        }
    }
}

.swiper-pagination-bullet{
    background-color:${({theme}) => theme.common.whiteColor };}

.swiper-pagination-bullet-active{
    background-color:${({theme}) => theme.common.greenBg };
    width:10px;
    height:10px;
}
    `

export default Hero

import { useState } from 'react';
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Keyboard } from 'swiper/modules'

const MyImage = ({imgs}) => {
    const[image,setImage]=useState()
  return (
    <Main>
      <Swiper
              pagination={{
                type: 'fraction',
              }}
              keyboard={{
                enabled: true,
              }}
              modules={[Pagination, Keyboard]}
              className="mySwiper"
            >
            

            {
                imgs.map((curElm)=>{
                    return(
                        <SwiperSlide>
                        <img src={curElm} alt="" className={image==curElm?'box_image active':'show'} onClick={()=>setImage(curElm)} />
                        </SwiperSlide>
                    )
                })
            }
      </Swiper>
    
    </Main>
  )
}
const Main = styled.section`
    display:grid;
    grid-template-columns:1fr;
    gap:20px;
    place-items:center;

    .box_image{
        margin-top:20px;
        cursor:pointer;
    }


.swiper {
    width: 100%;
  }
  
  .swiper-slide {
    text-align: center;
    font-size: 18px;
  
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }
    `

export default MyImage
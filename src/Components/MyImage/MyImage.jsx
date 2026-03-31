
import { useState } from 'react';
import styled from 'styled-components'

const MyImage = ({imgs}) => {
    const[image,setImage]=useState(imgs[0])
  return (
    <Main>
    <div>
        <figure>
            {
                imgs.map((curElm)=>{
                    return(
                        <img src={curElm} alt="" className={image==curElm?'box_image active':'show'} onClick={()=>setImage(curElm)} />
                    )
                })
            }
        </figure>
    </div>
    <div className="product_Image">
        <img src={imgs} alt="" className={image===imgs[0]?'box_image active':'show'} />
    </div>
    </Main>
  )
}
const Main = styled.section`
    display:grid;
    grid-template-columns:0.4fr 1fr;
    gap:20px;
    place-items:center;

    .box_image{
        margin-top:20px;
        cursor:pointer;
        border:1px solid #ccc;
    }
    `

export default MyImage
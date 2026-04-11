
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { FaTruckFast } from 'react-icons/fa6'
import { LuReplaceAll } from 'react-icons/lu'
import { FaShieldVirus } from 'react-icons/fa'
import Star from '../Star/Star'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import MyImage from '../MyImage/MyImage'
import RelatedProduct from '../RelatedProduct/RelatedProduct'
import { useContext } from 'react'
import { AppContext } from '../../Context/Context'
import Button from '../../assets/Styled/ButtonStyle'


const DetailsContact = ({products}) => {
    const {dispatch} = useContext(AppContext)
    const {id} = useParams()
  return (
    <Main>
        {
            products.map((curElm)=>{
                if(curElm.id==id){
                    return(
                        
                        <div className="main__wrapper">

                            <Breadcrumb curElm={curElm}/>
                              <div className="product_detail__Page grid grid__two">
                                  <div className="product_image">
                                    <MyImage key={curElm.id} imgs={curElm.images}/>
                                  </div>     
                                  <div className="product_content">
                                      <h4>{curElm.title} <span className='category' >({curElm.category})</span> </h4>
                                      <p><Star rating={curElm.rating}/></p>
                                  
                                      <p>Mrp: &#8377;{curElm.price} </p>
                                      <div className="product_warranty">
                                          <div className="product_warranty__data">
                                          <FaTruckFast className='warranty_icon'  />
                                          {curElm.shippingInformation}
                                          </div>
                                          <div className="product_warranty__data">
                                          <LuReplaceAll className='warranty_icon' />
                                          {curElm.returnPolicy}
                                          </div>
                                          <div className="product_warranty__data">
                                          <FaShieldVirus className='warranty_icon'  />
                                          {curElm.warrantyInformation}
                                          </div>
                                      </div>
                                      <div className="product_data__info">
                                          <p>Available : {curElm.stock} <span>({curElm.stock > 0 ? 'In Stock' : 'Not Available'})</span>
                                          </p>
                                          <p>
                                              Brand : <span>{curElm.description}</span>
                                          </p>
                                      </div>
                                        <Button onClick={()=>dispatch({type:'ADD_CART', curProduct:curElm})}>Add Cart</Button>
                                  </div>
                              </div>
                              <RelatedProduct curElm={curElm}/>
                          </div>
                    )
                }
            })
        }

    </Main>
  )
}
const Main = styled.section`


.product_detail__Page{
    margin-top:50px;
}

.product_warranty{
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    margin-bottom:20px;

    .product_warranty__data{
        display:flex;
        gap:30px;
        flex-direction:column;
        align-items:center;

            .warranty_icon{
                margin-bottom:10px;
                background-color:${({theme}) => theme.common.greenBg };
                width:30px;
                height:30px;
                padding:5px;
                border-radius:100px;
            }
    }
}

.dimensions{
    font-size:16px;
}

.category{
    font-size:18px;
    color:${({theme}) => theme.common.greenBg };
}

.related__product{
    border-top:1px solid #ccc;
    margin-block:50px;
    padding-top:50px;

    img{
        border:5px solid #f1f1f1;
        padding:10px;
        margin-block-start:50px;
    }
}

@media(width <= 500px){
    .grid__two{
        grid-template-columns:repeat(1, 1fr);
    }
}
    
`

export default DetailsContact
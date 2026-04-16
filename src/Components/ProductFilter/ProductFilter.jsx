import React, {useContext, useState } from 'react'
import { AppContext } from '../../Context/Context'
import styled from 'styled-components'
import ProductFilterLeft from './ProductFilterLeft'
import ProductFilterRight from './ProductFilterRight'

const ProductFilter = () => {
  const[inputSearch,setInputSearch]=useState('')
  const[categoryValue,setCategoryValue]=useState([])
  const{products}=useContext(AppContext)

  //   Filter Search  
  const filterProductSearch = products.filter((curSearch)=>{
    return curSearch.category.toLowerCase().includes(inputSearch.toLowerCase())
  })

 

  
  //   Filter Category
  const filterCategory = products.map((curFilter)=>{
    return curFilter.category
  })

  const uniqueCategoryListing = ['all',...new Set(filterCategory)]

  const handleClick = (curElm) => {
    if(curElm === 'all'){
        setCategoryValue(products)
    }else{
        const categoryFit = products.filter((el)=>{
          return el.category === curElm
        })

        setCategoryValue(categoryFit)
    }
  }
  


  return (
    <Main>
        <div className='product__card'>
            <div className='product__card__list'>
              <ProductFilterLeft handleClick={handleClick} setInputSearch={setInputSearch} inputSearch={inputSearch} uniqueCategoryListing={uniqueCategoryListing} />
            </div>
            <div>
              <ProductFilterRight filterProductSearch={filterProductSearch} categoryValue={categoryValue} />
            </div>
        </div>
    </Main>
  )
}
const Main = styled.section`
  .product__card{
    display:grid;
    grid-template-columns:0.4fr 1fr;
    gap:20px;

      .product__card__list{
        margin-block-start:10px;
        position:sticky;
        top:100px;
        z-index:9;

          .product__card__list__search{
              display:flex;
              justify-content:space-between;
              align-items:center;
              margin-block-start:20px;

                input{
                  width:100%;
                  padding:10px;
                  border:1px solid #ccc;
                  border-radius:5px;
                }
          }

          .product__card__filter{
            margin-block-start:50px;

            ul{
              li{
                border-bottom:1px solid #ccc;
                margin-block-end:10px;
                padding-block-end:10px;
                color:#999;
                transition:all .5s;
                cursor:pointer;

                &:hover{
                  letter-spacing:.3rem;
                }
              }
            }
          }
      }
    }

    .select__category{
      margin-block-start:50px;
    }

    @media(width <= 1100px){
        .grid__three{
            grid-template-columns:repeat(2, 1fr);
        }
    }

    @media(width <= 768px){
        .grid__three{
            grid-template-columns:repeat(1, 1fr);
        }
    }

    @media(width <= 600px){
        .product__card{
            grid-template-columns:1fr;
        }

        .product__card__list__search{
            position:relative;
            z-index:9999999 !importan;
        }

        .product__card__filter{
            display:none;
        }
    }
`

export default ProductFilter
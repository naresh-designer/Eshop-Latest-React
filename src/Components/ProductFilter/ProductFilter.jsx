import React, {lazy, Suspense, useContext, useState } from 'react'
import { AppContext } from '../../Context/Context'
import styled from 'styled-components'
const Card = lazy(() => import('../Card/Card'))

const ProductFilter = () => {
  const[inputSearch,setInputSearch]=useState('')
  const[categoryValue,setCategoryValue]=useState([])
  const{products}=useContext(AppContext)

  //   Filter Search  
  const filterProductSearch = products.filter((curSearch)=>{
    return curSearch.category.toLowerCase().includes(inputSearch.toLowerCase())
  })
  
  //   Filter Category
  const filterCategory = filterProductSearch.map((curFilter)=>{
    return curFilter.category
  })

  const uniqueCategoryListing = ['all',...new Set(filterCategory,categoryValue)]

  const handleClick = (curElm) => {
    if(curElm === 'all'){
        setCategoryValue(filterProductSearch)
    }else{
        setCategoryValue(filterProductSearch.filter((el)=>el.category===curElm))
    }
  }
  


  return (
    <Main>
        <div className='product__card'>
            <div className='product__card__list'>

                {/* Search Listing */}
                <div className="product__card__list__search">
                    <input type="text" placeholder='Enter keyword....' value={inputSearch} onChange={(e)=>setInputSearch(e.target.value)} />
                </div>
                {/* End Search Listing */}

                {/* Filter Category Listing */}
                <div className='product__card__filter'>
                    <ul>
                        {
                            uniqueCategoryListing.map((curElm,index)=>{
                                return(
                                    <li key={index} onClick={()=>handleClick(curElm)}>{curElm}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                {/* End Filter Category Listing */}

            </div>
            <div>
                    {
                    filterProductSearch.length === 0 ? <h4 style={{textAlign:'center',height:'50vh',display:'grid',placeItems:'center'}}>No Product Found</h4> :
                    <div className='grid grid__three' >
                        {
                            filterProductSearch.map((curElm)=>{
                                if(categoryValue.length === 0){
                                    return(
                                    <Suspense key={curElm.id} fallback={<h6>Loading...</h6>}>
                                    <Card curElm={curElm} />
                                    </Suspense>
                                )
                                }else if(categoryValue.includes(curElm)){
                                    return(
                                        <Suspense key={curElm.id} fallback={<h6>Loading...</h6>}>
                                        <Card curElm={curElm} />
                                        </Suspense>
                                    )
                                }
                            })
                        }
                        </div>
                    }
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
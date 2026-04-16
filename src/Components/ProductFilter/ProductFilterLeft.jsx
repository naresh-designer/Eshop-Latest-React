import React from 'react'
import styled from 'styled-components'

const ProductFilterLeft = ({handleClick,uniqueCategoryListing,inputSearch,setInputSearch}) => {

  return (
    <Main>
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

                {/* Select Category */}
                <div className="select__category">
                  <select name="category" onChange={(e)=>handleClick(e.target.value)}>
                      {
                          uniqueCategoryListing.map((curElm,index)=>{
                              return(
                                  <option key={index} value={curElm}>{curElm}</option>
                              )
                          })
                      }
                  </select>
                  </div>
                {/* End Select Category */}

    </Main>
  )
}

const Main = styled.section`
`

export default ProductFilterLeft
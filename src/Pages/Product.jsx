import React, { lazy, Suspense, useContext, useState } from 'react'
import styled from 'styled-components'
const Card = lazy(() => import('../Components/Card/Card'))
// import Card from '../Components/Card/Card'
// import Card from '../Components/Card/Card'
import { AppContext } from '../Context/Context'
import Heading from '../Components/Heading/Heading'
import Counter from '../Components/Counter/Counter'
import Faq from '../Components/Faq/Faq'

const Product = () => {
  const [inputSearch,setInputSearch]=useState('')
  const{products}=useContext(AppContext)

  const filterProduct = products.filter((curElm)=>{
    return(
      curElm.category.toLowerCase().includes(inputSearch.toLowerCase())
    )
  })

  

  
  
  const headingData = {
      subHeading : 'POPULAR PRODUCTS',
      mainHeading : 'Products'
  }
  

  return (
    <Main>
      <Heading headingData={headingData}/>
      <div className="main__wrapper">

        <div className='search'>
          <input type="text" value={inputSearch} onChange={(e)=>setInputSearch(e.target.value)} placeholder='Search...' />
        </div>

          

        {
          filterProduct.length === 0 ? <h2 style={{textAlign:'center'}}>No Product Found</h2> :
          <div className='grid grid__four' >
          {
            filterProduct.map((curElm)=>{
              return(
                <Suspense fallback={<h6>Loading...</h6>}>
                <Card key={curElm.id} curElm={curElm} />
                </Suspense>
              )
            })
          }
        
        </div>}
      </div>
      <Counter/>
      <Faq/>
    </Main>
  )
}
const Main = styled.section`
padding:50px 0 0;
  margin-block-start:50px;
  .search{
    width:50%;
    margin-inline:auto;
    margin-block:20px;
    input{
      width:100%;
      padding:10px;
      border:1px solid #ccc;
      border-radius:5px;
    }
  }
`

export default Product
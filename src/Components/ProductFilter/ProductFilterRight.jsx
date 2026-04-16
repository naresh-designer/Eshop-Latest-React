import React, { lazy,Suspense } from 'react'
import styled from 'styled-components'
const Card = lazy(() => import('../Card/Card'))

const ProductFilterRight = ({filterProductSearch,categoryValue}) => {
  return (
    <Main>
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
    </Main>
  )
}
const Main = styled.section``

export default ProductFilterRight
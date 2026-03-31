import React, { useContext } from 'react'
import Heading from '../Heading/Heading'
import { AppContext } from '../../Context/Context'
// import DealsData from './DealsData'
// import { Link } from 'react-router-dom';
import DealsData from './DealsData';

const Deals = () => {
    const{products}=useContext(AppContext)
    const headingData = {
        subHeading : 'POPULAR PRODUCTS',
        mainHeading : 'deals'
    }
  return (
    <>
        <Heading headingData={headingData}/>
        <DealsData products={products}/>
                    

    </>
  )
}

export default Deals
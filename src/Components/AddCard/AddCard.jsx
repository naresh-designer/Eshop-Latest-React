import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../../Context/Context'
import Button from '../../assets/Styled/ButtonStyle'
import { Link } from 'react-router-dom'

const AddCard = ({curElm}) => {
    const {dispatch} = useContext(AppContext)
  return (
    <>
    <Link to='/cart'>
    <Button onClick={()=>dispatch({type:'ADD_CART', curProduct:curElm})}>Buy Now</Button>
    </Link>
    </>
  )
}

export default AddCard
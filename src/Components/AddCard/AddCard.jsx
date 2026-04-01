import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../../Context/Context'
import Button from '../../assets/Styled/ButtonStyle'

const AddCard = ({curElm}) => {
    const {dispatch} = useContext(AppContext)
  return (
    <>
    <Button onClick={()=>dispatch({type:'ADD_CART', curProduct:curElm})}>Add Cart</Button>
    </>
  )
}

export default AddCard
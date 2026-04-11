import React from 'react'
import styled from 'styled-components'
import Button from '../../assets/Styled/ButtonStyle'

const ForgotPassword = () => {
  return (
    <Main>
        <form>
            <div>
            <input type="email" name="email" placeholder='Email' required />
            <input type="password" name="password" placeholder='New Password' required />
            <Button type='submit'>Send</Button>
            </div> 
        </form>
    </Main>
  )
}

const Main = styled.section``

export default ForgotPassword
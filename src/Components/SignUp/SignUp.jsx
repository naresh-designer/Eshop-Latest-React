import React from 'react'
import styled from 'styled-components'
import Button from '../../assets/Styled/ButtonStyle'

const SignUp = () => {
  return (
    <Main>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder='Email' required />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder='Password' required />
        <label htmlFor="password">Confirm Password</label>
        <input type="password" name="confirmpassword" placeholder='Confirm Password' required />
        <Button type='submit'>signup</Button>
      </form>
    </Main>
  )
}

const Main = styled.section`

  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding-inline: 10px;
    height: 50px;
    border: 1px solid #ccc;
    margin-block: 10px;
  }
`

export default SignUp
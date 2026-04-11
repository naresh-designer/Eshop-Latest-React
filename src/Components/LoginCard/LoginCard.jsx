import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../../assets/Styled/ButtonStyle'
import { Link } from 'react-router-dom'
import ForgotPassword from '../ForgotPassword/ForgotPassword'

const LoginCard = ({loginCard,setLoginCard}) => {
  const[forgotPassword,setForgotPassword] = useState(false);
  const[loginValue,setLoginValue] = useState({
    email: '',
    password: ''
  });

  const handleInput = (e)=>{
    const{name,value}=e.target
    setLoginValue({...loginValue,[name]:value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
  }
  

  return (
    <Main>
      {
        forgotPassword ? 
        <ForgotPassword/>
        : 
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input type="email" name="email" value={loginValue.email} onChange={handleInput} placeholder='Email' required />
            <label>Password</label>
            <input type="password" name="password" value={loginValue.password} onChange={handleInput} placeholder='Password' required />
            <Button type='submit'>Login</Button><Link onClick={() => setForgotPassword(!forgotPassword)}>Forgot Password</Link>
            <p>Don't have an account? <Link onClick={() => setLoginCard(!loginCard)}>Signup Now</Link></p>
          </form>
      }
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

export default LoginCard
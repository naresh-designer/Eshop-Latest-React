import React from 'react'
import PolicyList from './PolicyList'
import styled from 'styled-components'

const Policy = () => {
  return (
    <Main>
        <PolicyList/>
    </Main>
  )
}

const Main = styled.section`
    background-color:${({theme}) => theme.common.blackColor };
    padding:40px 0;
`

export default Policy
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getData } from '../../Services/Services'
import { aboutApi } from '../../Constant/Constant'
import Heading from '../Heading/Heading'
import TeamData from './TeamData'

const Team = () => {
    const[teamData,setTeamData]=useState([])

    useEffect(()=>{
        const fetchData = async()=>{
            const data = await getData(aboutApi)
            setTeamData(data)
        }
        fetchData()
    },[])

    const headingData = {
        subHeading:'About',
        mainHeading:'Our Team',
    }
  return (
    <>
    <Main>
        <div className="main__wrapper gird">
            <Heading headingData={headingData} />
            <TeamData teamData={teamData}/>
        </div>
    </Main>
    </>
  )
}

const Main = styled.section`
margin-block-start:100px;
`

export default Team
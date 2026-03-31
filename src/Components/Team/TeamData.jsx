import React from 'react'
import styled from 'styled-components'

const TeamData = ({teamData}) => {
  return (
    <Main>

        <div className='team grid grid__three ' >
            {
                teamData.slice(0,3).map((curElm)=>{
                    return(
                        <div className="team__container" >
                            <div className="team__image">
                                <figure>
                                    <img src={curElm.avatar} alt={name} />
                                </figure>
                            </div>
                            <div className="team__heading">
                            <p>{curElm.name}</p>
                            <p>{curElm.role}</p>
                            <p>{curElm.email}</p>
                            </div>
                            
                            <p>With 26 years experience working on both sides of the fence for clients and construction companies</p>
                        </div>
                    )
                })
            }
        </div>
    </Main>
  )
}
const Main = styled.section`


.team__image {
    margin-block:30px;
}

.team__heading{
    display:flex;
    justify-content:space-between;
    border-bottom:2px solid black;
    margin-bottom:20px;
}
`

export default TeamData
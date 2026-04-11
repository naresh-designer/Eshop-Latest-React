import React from 'react'
import styled from 'styled-components'

const TeamData = ({teamData}) => {
  return (
    <Main>

        <div className='team grid grid__four ' >
            {
                teamData.slice(0,8).map((curElm)=>{
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

.team__image img{
    width:100px;
    height:100px;
    border-radius:100px;
    margin-inline:auto;
}
`

export default TeamData
import React from 'react'
import Heading from '../Components/Heading/Heading'
import styled from 'styled-components'
import Counter from '../Components/Counter/Counter'
import Faq from '../Components/Faq/Faq'

const Contact = () => {

  const headingData = {
      subHeading:'',
      mainHeading:'Contact',
  }
  return (
    <Main>
      <Heading headingData={headingData} />
      <div className="map__content">
        <p>FOR PERSONALISED EXPERT GUIDANCE EMAIL OR CALL</p>
        <div className="phone_name">
          <div>
            <p>JANO YOUSSEPH</p>
            <hr/>
            <p>+61 407 235 563</p>
          </div>
          <div>
            <p>JANO YOUSSEPH</p>
            <hr/>
            <p>+61 407 235 563</p>
          </div>
        </div>
        <div className="phone_name">
          <div>
            <p>STUDIO</p>
            <hr/>
            <p>JPY GROUP PTY LTD
            SUITE 8.06, 6A GLEN STREET
            MILSONS POINT, NSW 2061</p>
          </div>
          <div>
            <p>POSTAL ADDRESS</p>
            <hr/>
            <p>P.O. BOX
130 NORTHBRIDGE
NSW 1560</p>
          </div>
        </div>
      </div>
      <div className="studio_image">
        <figure>
          <img src="/work/shop/images/contact-studio.jpg" alt="" />
        </figure>
      </div>
      <Counter/>
      <Faq/>
    </Main>
  )
}
const Main = styled.section`
  margin-block:50px;
  padding-top:100px;

  .map__content{
    max-width:600px;
    margin-block:60px;
    margin-inline:auto;
    text-align:center;
  }

  .phone_name{
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    margin-top:70px;
  }

  .phone_name div{
    width:250px;
  }

  .studio_image{
    max-width:600px;
    margin-inline:auto;
  }
`

export default Contact
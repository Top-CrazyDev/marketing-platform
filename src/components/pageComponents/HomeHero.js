import React from "react"

import styled from "styled-components"

import bgCircle from "../../assets/images/bg-pattern-circle.svg"
import Phone from "../../components/pageComponents/Phone"
import Form from "../../components/structural/Form"
import Contact from "../../components/structural/Contact"

const HeaderStyles = styled.section`
  background: url(${bgCircle}) no-repeat center 100px;
  background-size: 120%, 320px;
  @media screen and (min-width: 1024px) {
    background-size: auto;
    background-position: calc(50% + 450px) calc(50% - 200px);
    padding-left: calc(var(--base-size) * 4);
    padding-right: calc(var(--base-size) * 4);
  }
`

const HeaderSectionStyles = styled.div`
  display: flex;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: calc(var(--base-size) * 3) var(--base-size);
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    padding-top: calc(var(--base-size) * 7);
  }
`

const HeaderContentStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 1024px) {
    align-items: flex-start;
  }
`

const PhoneContainerStyles = styled.div`
  @media screen and (min-width: 1024px) {
    order: 1;
  }
`

const H1Styles = styled.h1`
  text-align: center;
  @media screen and (min-width: 1024px) {
    text-align: left;
  }
`

const HeaderH1Styles = styled(H1Styles)`
  color: var(--blue-grey);
  @media screen and (min-width: 1024px) {
    font-size: calc(var(--base-size) * 3.5);
    max-width: 550px;
  }
`

const HomeHero = () => {
  return (
    <HeaderStyles>
      <HeaderSectionStyles>
        <PhoneContainerStyles>
          <Phone />
        </PhoneContainerStyles>
        <HeaderContentStyles>
          <HeaderH1Styles>
            Start building with our APIs for absolutely free
          </HeaderH1Styles>
          <Form
            placeholder="Enter email address"
            buttonText="Schedule a Demo"
            bgColor="hot-pink"
          />
          <Contact description="Have any questions?" />
        </HeaderContentStyles>
      </HeaderSectionStyles>
    </HeaderStyles>
  )
}

export default HomeHero

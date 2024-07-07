import React from "react"

import styled from "styled-components"

import Section from "../structural/Section"
import Form from "../structural/Form"

const EndCTAStyles = styled.div`
  display: grid;
  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`

const ContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const H1Styles = styled.h1`
  color: var(--blue-grey);
  text-align: center;
  @media screen and (min-width: 1024px) {
    text-align: left;
  }
`

const EndCTA = ({ title, alignForm }) => {
  return (
    <Section>
      <EndCTAStyles>
        <ContainerStyles>
          <H1Styles>{title}</H1Styles>
        </ContainerStyles>
        <ContainerStyles>
          <Form
            placeholder="Enter email address"
            buttonText="Schedule a Demo"
            bgColor="hot-pink"
            alignForm={alignForm}
          />
        </ContainerStyles>
      </EndCTAStyles>
    </Section>
  )
}

export default EndCTA

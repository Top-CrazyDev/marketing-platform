import React from "react"

import styled from "styled-components"

import Section from "../components/structural/Section"
import HeaderH2 from "../components/structural/HeaderH2"

const Page404ContainerStyles = styled.div`
  padding: calc(var(--base-size) * 7) 0;
`

const PageNotFound = () => {
  return (
    <Page404ContainerStyles>
      <Section>
        <HeaderH2>Sorry, the page you're looking for doesn't exist.</HeaderH2>
      </Section>
    </Page404ContainerStyles>
  )
}

export default PageNotFound

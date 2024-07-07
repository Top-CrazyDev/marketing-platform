import React from "react"

import styled from "styled-components"

const PanelStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: var(--base-size);
  @media screen and (min-width: 768px) {
    grid-template-columns: 30% 70%;
  }
`

const OneTwoThirdsPanel = ({ children }) => {
  return <PanelStyles>{children}</PanelStyles>
}

export default OneTwoThirdsPanel

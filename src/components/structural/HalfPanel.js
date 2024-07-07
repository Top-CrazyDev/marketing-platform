import React from "react"

import styled from "styled-components"

const HalfPanelStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: calc(var(--base-size) * 4);
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: calc(var(--base-size) * 3);
  }
`

const HalfPanel = ({ children }) => {
  return <HalfPanelStyles>{children}</HalfPanelStyles>
}

export default HalfPanel

import React from "react"

import styled from "styled-components"

const PanelDescriptionStyles = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-basis: 600px;
  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }
  &.left {
    @media screen and (min-width: 768px) {
      order: -1;
    }
  }
`
const PanelDescription = ({ children, order }) => {
  return (
    <PanelDescriptionStyles className={order}>
      {children}
    </PanelDescriptionStyles>
  )
}
export default PanelDescription

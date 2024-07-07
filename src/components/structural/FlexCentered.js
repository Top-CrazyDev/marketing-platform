import React from "react"

import styled from "styled-components"

const FlexCenteredStyles = styled.div`
  display: flex;
  justify-content: center;
`

const FlexCentered = ({ children }) => {
  return <FlexCenteredStyles>{children}</FlexCenteredStyles>
}

export default FlexCentered

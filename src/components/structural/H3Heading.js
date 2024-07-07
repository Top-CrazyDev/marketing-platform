import React from "react"

import styled from "styled-components"

const HeadingStyles = styled.h3`
  font-family: "Libre Baskerville", serif;
  font-weight: bold;
  font-size: ${props => props.fontSize || "30px"};
  color: ${props => props.color || `var(--blue-grey)`};
  margin-bottom: ${props => props.marginBottom || "32px"};
  text-align: center;
  @media screen and (min-width: 1024px) {
    text-align: left;
  }
`

const H3Heading = ({ children, color, fontSize, marginBottom }) => {
  return (
    <HeadingStyles
      color={color}
      fontSize={fontSize}
      marginBottom={marginBottom}
    >
      {children}
    </HeadingStyles>
  )
}

export default H3Heading

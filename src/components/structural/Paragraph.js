import React from "react"

import styled from "styled-components"

const ParagraphStyles = styled.p`
  &.white {
    color: var(--white);
  }
  text-align: ${props => props.textAlign || "center"};
  line-height: 2;
  margin-bottom: ${props => props.marginBottom || "16px"};
  @media screen and (min-width: 768px) {
    text-align: left;
    max-width: ${props => props.maxWidth || "450px"};
    margin-bottom: ${props => props.marginBottom || `"32px"`};
  }
`

const P = ({ children, color, textAlign, maxWidth, marginBottom }) => {
  return (
    <ParagraphStyles
      className={color}
      textAlign={textAlign}
      maxWidth={maxWidth}
      marginBottom={marginBottom}
    >
      {children}
    </ParagraphStyles>
  )
}

export default P

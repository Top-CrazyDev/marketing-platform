import React from "react"

import styled from "styled-components"

const HeaderH2Styles = styled.h2`
  font-size: calc(var(--base-size) * 3);
  text-align: center;
  color: var(--blue-grey);
  @media screen and (min-width: 1024px) {
    text-align: left;
    max-width: 550px;
  }
`

const HeaderH2 = ({ children }) => {
  return <HeaderH2Styles>{children}</HeaderH2Styles>
}

export default HeaderH2

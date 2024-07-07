import React from "react"

import styled from "styled-components"

const HeaderSectionStyles = styled.div`
  display: flex;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: calc(var(--base-size) * 3) 0 0;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    padding-top: calc(var(--base-size) * 6);
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

const Header = ({ children }) => {
  return (
    <div>
      <HeaderSectionStyles>
        <HeaderContentStyles>{children}</HeaderContentStyles>
      </HeaderSectionStyles>
    </div>
  )
}

export default Header

import React from "react"

import styled from "styled-components"

import bgCircle from "../../assets/images/bg-pattern-circle.svg"

const BackgroundStyles = styled.div`
  @media screen and (min-width: 1024px) {
    background: url(${bgCircle}) no-repeat center 100px;
    background-size: 650px;
    background-position: 105% -300px;
  }
`

const TopBackgroundCircle = ({ children }) => {
  return <BackgroundStyles>{children}</BackgroundStyles>
}

export default TopBackgroundCircle

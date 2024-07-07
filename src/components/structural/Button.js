import React from "react"

import styled from "styled-components"

const ButtonStyles = styled.button`
  border-radius: calc(var(--base-size) * 2);
  margin: calc(var(--base-size) / 2) 0;
  height: calc(var(--base-size) * 4);
  color: white;
  padding: 0 calc(var(--base-size) * 2);
  transition: all 0.2s ease;
  align-self: ${props => props.alignSelf || "initial"};

  &:hover {
    transition: all 0.2s ease;
  }

  &.transparent-white {
    border: 2px solid var(--white);
    background-color: var(--transparent);
    &:hover {
      background-color: white;
      color: var(--blue-black);
    }
  }

  &.transparent-blue-grey {
    border: 2px solid var(--blue-grey);
    background-color: var(--transparent);
    color: var(--blue-grey);
    &:hover {
      background-color: var(--blue-grey);
      color: var(--white);
    }
  }

  &.hot-pink {
    border: 2px solid var(--hot-pink);
    background-color: var(--hot-pink);
    color: var(--white);

    &:hover {
      background-color: var(--blue-grey);
      border: 2px solid var(--blue-grey);
    }
  }
`

const Button = ({ type, text, bgColor, alignSelf }) => {
  return (
    <ButtonStyles type={type} className={bgColor} alignSelf={alignSelf}>
      {text}
    </ButtonStyles>
  )
}

export default Button

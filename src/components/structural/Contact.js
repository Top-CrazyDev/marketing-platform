import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const ContactStyles = styled.div`
  display: flex;
  justify-content: center;
  padding: calc(var(--base-size) * 2) 0;

  a {
    color: var(--blue-grey);
    font-family: "Roboto Medium", sans-serif;
    font-weight: 500;
    &:hover {
      color: var(--hot-pink);
    }
  }
`

const Contact = ({ description, linkText }) => {
  return (
    <ContactStyles>
      <p>
        {description} <Link to="/contact">Contact us</Link>
      </p>
    </ContactStyles>
  )
}

export default Contact

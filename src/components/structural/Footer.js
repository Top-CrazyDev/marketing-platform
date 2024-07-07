import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"
import logoWhite from "../../assets/images/logo-white.svg"
import bgCircle from "../../assets/images/bg-pattern-circle.svg"
import fb from "../../assets/images/facebook.svg"
import twitter from "../../assets/images/twitter.svg"
import linkedin from "../../assets/images/linkedin.svg"

import Icon from "../structural/Icon"

const FooterStyles = styled.footer`
  background-color: var(--blue-black);

  .container {
    background: url(${bgCircle}) no-repeat center 100px;
    background-size: 120%, 320px;
    padding: calc(var(--base-size) * 2) 0;
    @media screen and (min-width: 768px) {
      display: flex;
      padding: var(--base-size) var(--base-size);
      background-size: 300px;
      background-position: calc(50% + 300px) top;
      width: 100%;
      max-width: 1100px;
      margin: 0 auto;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    @media screen and (min-width: 768px) {
      flex-direction: row;
    }
  }

  ul.nested {
    flex-direction: row;
    @media screen and (min-width: 768px) {
      justify-content: flex-end;
    }
  }

  li {
    margin: var(--base-size);
  }

  a {
    font-weight: 600;
    color: var(--white);
    text-decoration: none;
  }

  .logo {
    background: url(${logoWhite}) no-repeat center center;
    width: 100%;
    max-width: 140px;
    margin: 0 auto;
    height: 50px;
    padding: 16px 0;
    flex-basis: 300px;
    flex: 1 1 auto;

    @media screen and (min-width: 768px) {
      margin: 0;
    }
  }
`

const Footer = () => {
  return (
    <FooterStyles>
      <div className="container">
        <div
          className="logo"
          role="button"
          aria-label="home"
          tabIndex={0}
        ></div>
        <ul>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <ul className="nested">
            <li>
              <Icon image={fb} alt="facebook" />
            </li>
            <li>
              <Icon image={twitter} alt="twitter" />
            </li>
            <li>
              <Icon image={linkedin} alt="linkedin" />
            </li>
          </ul>
        </ul>
      </div>
    </FooterStyles>
  )
}

export default Footer

import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"

import bgCircle from "../../assets/images/bg-pattern-circle.svg"

import Section from "../../components/structural/Section"
import HalfPanel from "../../components/structural/HalfPanel"
import CompaniesGrid from "../../components/pageComponents/CompaniesGrid"
import PanelDescription from "../../components/structural/PanelDescription"
import P from "../../components/structural/Paragraph"

const WhoWeWorkWithStyles = styled.section`
  background: url(${bgCircle}) no-repeat center 100px;
  background-size: 120%, 320px;
  background-color: var(--blue-black);
  @media screen and (min-width: 768px) {
    background-position: -150px -250px;
    background-size: 600px;
  }
  @media screen and (min-width: 1200px) {
    background-size: auto;
    background-position: calc(50% - 650px) 100%;
  }

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: ${props => props.alignSelf || "initial"};
    color: white;
    border-radius: calc(var(--base-size) * 2);
    margin: calc(var(--base-size) / 2) 0;
    height: calc(var(--base-size) * 4);
    text-decoration: none;
    padding: 0 calc(var(--base-size) * 2);
    transition: all 0.2s ease;
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
  }
`

const H1Styles = styled.h1`
  color: var(--white);
  text-align: center;
  @media screen and (min-width: 1024px) {
    text-align: left;
  }
`

const WhoWeWorkWith = () => {
  return (
    <WhoWeWorkWithStyles>
      <Section>
        <HalfPanel>
          <CompaniesGrid />
          <PanelDescription order="left">
            <H1Styles color="white">Who we work with</H1Styles>
            <P color="white">
              Today, millions of people around the world have successfully
              connected their accounts to apps they love using our API. We
              provide developers with the tools they need to create easy and
              accessible experiences for their users.
            </P>
            <Link to="/about" className="transparent-white">
              About us
            </Link>
          </PanelDescription>
        </HalfPanel>
      </Section>
    </WhoWeWorkWithStyles>
  )
}

export default WhoWeWorkWith

import React from "react"

import H3Heading from "../structural/H3Heading"

import styled from "styled-components"

const CompanyNumbersStyles = styled.div`
  display: grid;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: var(--base-size) calc(var(--base-size) * 2);
  @media screen and (min-width: 768px) {
    grid-gap: calc(var(--base-size) * 2);
    grid-template-columns: repeat(3, 1fr);
    padding-left: 0;
    padding-right: 0;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: calc(var(--base-size) * 2);
    &:nth-child(1) {
      border-top: 1px solid var(--light-grey);
      @media screen and (min-width: 768px) {
        border-bottom: 1px solid var(--light-grey);
      }
    }
    &:nth-child(2) {
      @media screen and (min-width: 768px) {
        border-top: 1px solid var(--light-grey);
        border-bottom: 1px solid var(--light-grey);
      }
    }
    &:nth-child(3) {
      border-bottom: 1px solid var(--light-grey);
      @media screen and (min-width: 768px) {
        border-top: 1px solid var(--light-grey);
      }
    }
  }

  .title {
    font-weight: bold;
    margin-bottom: var(--base-size);
  }
`

const CompanyNumbers = () => {
  return (
    <CompanyNumbersStyles>
      <div className="container">
        <p className="title">Team Members</p>
        <H3Heading color="#BA4270" fontSize="48px" marginBottom="0px">
          300+
        </H3Heading>
      </div>
      <div className="container">
        <p className="title">Offices in the US</p>
        <H3Heading color="#BA4270" fontSize="48px" marginBottom="0px">
          3
        </H3Heading>
      </div>
      <div className="container">
        <p className="title">Transactions analyzed</p>
        <H3Heading color="#BA4270" fontSize="48px" marginBottom="0px">
          10M+
        </H3Heading>
      </div>
    </CompanyNumbersStyles>
  )
}

export default CompanyNumbers

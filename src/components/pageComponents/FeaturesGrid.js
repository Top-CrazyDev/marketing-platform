import React from "react"

import Section from "../structural/Section"
import Icon from "../structural/Icon"
import styled from "styled-components"

import iconBanking from "../../assets/images/icon-banking-and-coverage.svg"
import iconConsumerPayments from "../../assets/images/icon-consumer-payments.svg"
import iconPersonalFinances from "../../assets/images/icon-personal-finances.svg"

const FeaturesGridStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0 calc(var(--base-size) * 2);
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    align-items: flex-start;
  }
`

const FeaturesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const H3Styles = styled.h3`
  margin: calc(var(--base-size) * 3) 0 calc(var(--base-size) * 2);
`

const ParagraphStyles = styled.p`
  margin-bottom: calc(var(--base-size) * 2);
  line-height: 2;
`

const FeaturesGrid = () => {
  return (
    <Section>
      <FeaturesGridStyles>
        <FeaturesContainer>
          <Icon
            image={iconPersonalFinances}
            alt="Personal finances"
            width="auto"
          />
          <H3Styles>Personal Finances</H3Styles>
          <ParagraphStyles>
            Consolidate financial data from multiple sources and categorize
            transactions up to 2 years of history. Analyze reports to reconcile
            activities in your account.
          </ParagraphStyles>
        </FeaturesContainer>
        <FeaturesContainer>
          <Icon image={iconBanking} alt="Banking icon" width="auto" />
          <H3Styles>Banking & Coverage</H3Styles>
          <ParagraphStyles>
            With our platform, you can speed up account onboarding and support
            ongoing payments for checking, savings, credit card, and brokerage
            accounts.
          </ParagraphStyles>
        </FeaturesContainer>
        <FeaturesContainer>
          <Icon
            image={iconConsumerPayments}
            alt="Consumer payments icon"
            width="auto"
          />
          <H3Styles>Consumer Payments</H3Styles>
          <ParagraphStyles>
            It’s easier to set up secure bank payments with us through a flow
            designed with the user experience in mind. Customers could instantly
            authenticate their account.
          </ParagraphStyles>
        </FeaturesContainer>
      </FeaturesGridStyles>
    </Section>
  )
}

export default FeaturesGrid

import React from "react"
import P from "../structural/Paragraph"
import H3Heading from "../structural/H3Heading"

import styled from "styled-components"

import checkmarkPink from "../../assets/images/checkmark-hot-pink.svg"

const PricingColumnStyles = styled.div`
  h2,
  hr {
    margin-bottom: calc(var(--base-size) * 2);
  }

  h2 {
    color: var(--blue-grey);
  }

  ul {
    width: 100%;
    max-width: 150px;
    margin: 0 auto;
    text-align: left;
    @media screen and (min-width: 768px) {
      max-width: none;
    }
  }

  li {
    margin-bottom: var(--base-size);
    padding-left: calc(var(--base-size) * 2);

    &.checked {
      background: url(${checkmarkPink}) no-repeat;
      background-size: var(--base-size);
    }
  }
`

const PricingColumn = ({
  children,
  title,
  columnDescription,
  price,
  features,
}) => {
  const listFeatures = features.map(feature => {
    return (
      <li key={feature.name} className={feature.checked}>
        {feature.name}
      </li>
    )
  })
  return (
    <PricingColumnStyles>
      <H3Heading color="#BA4270">{title}</H3Heading>
      <P>{columnDescription}</P>
      <h2>{price}</h2>
      <hr />
      <ul>{listFeatures}</ul>
      {children}
    </PricingColumnStyles>
  )
}

export default PricingColumn

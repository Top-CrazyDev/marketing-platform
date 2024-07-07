import React from "react"
import Icon from "../structural/Icon"

import styled from "styled-components"

import tesla from "../../assets/images/tesla.svg"
import teslaDark from "../../assets/images/tesla-dark.svg"
import microsoft from "../../assets/images/microsoft.svg"
import microsoftDark from "../../assets/images/microsoft-dark.svg"
import google from "../../assets/images/google.svg"
import googleDark from "../../assets/images/google-dark.svg"
import hewlettPackard from "../../assets/images/hewlett-packard.svg"
import hewlettPackardDark from "../../assets/images/hewlett-packard-dark.svg"
import nvidia from "../../assets/images/nvidia.svg"
import nvidiaDark from "../../assets/images/nvidia-dark.svg"
import oracle from "../../assets/images/oracle.svg"
import oracleDark from "../../assets/images/oracle-dark.svg"

import H3Heading from "../structural/H3Heading"

const CompaniesGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, 1fr));
  grid-gap: calc(var(--base-size) * 3);
  justify-items: center;
  align-items: center;
  width: 100%;
  flex-basis: 600px;
  @media screen and (min-width: 768px) {
    grid-gap: calc(var(--base-size) * 4) calc(var(--base-size) * 2);
    grid-template-rows: 100px 100px;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
    grid-gap: 0 calc(var(--base-size) * 2);
    place-content: center;
  }
`

const ContainerStyles = styled.div`
  display: grid;
  place-content: center;
`

const PanelTitle = ({ title }) => {
  return title ? <H3Heading>{title}</H3Heading> : ""
}

const CompaniesGrid = ({ color, title }) => {
  return (
    <ContainerStyles>
      <PanelTitle title={title} />
      <CompaniesGridStyles>
        <Icon image={color ? teslaDark : tesla} alt="tesla" />
        <Icon image={color ? microsoftDark : microsoft} alt="microsoft" />
        <Icon
          image={color ? hewlettPackardDark : hewlettPackard}
          alt="hewlett packard"
        />
        <Icon image={color ? oracleDark : oracle} alt="oracle" />
        <Icon image={color ? googleDark : google} alt="google" />
        <Icon image={color ? nvidiaDark : nvidia} alt="nvidia" />
      </CompaniesGridStyles>
    </ContainerStyles>
  )
}

export default CompaniesGrid

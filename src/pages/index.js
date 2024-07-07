import React from "react"

import styled from "styled-components"

import implement from "../assets/images/implement.svg"
import simpleUI from "../assets/images/simple-ui.svg"

import Section from "../components/structural/Section"
import HalfPanel from "../components/structural/HalfPanel"
import FlexCentered from "../components/structural/FlexCentered"
import PanelDescription from "../components/structural/PanelDescription"
import P from "../components/structural/Paragraph"
import Image from "../components/structural/Image"

import HomeHero from "../components/pageComponents/HomeHero"
import FeaturesGrid from "../components/pageComponents/FeaturesGrid"
import WhoWeWorkWith from "../components/pageComponents/WhoWeWorkWith"
import EndCTA from "../components/pageComponents/EndCTA"

const H1Styles = styled.h1`
  color: var(--blue-grey);
  text-align: center;
  @media screen and (min-width: 1024px) {
    text-align: left;
  }
`

export default function Home() {
  return (
    <>
      <HomeHero />
      <WhoWeWorkWith />
      <Section>
        <HalfPanel>
          <FlexCentered>
            <Image image={implement} alt="terminal" />
          </FlexCentered>
          <PanelDescription>
            <H1Styles>Easy to implement</H1Styles>
            <P>
              Our API comes with just a few lines of code. You’ll be up and
              running in no time. We built our documentation page to integrate
              payments functionality with ease.
            </P>
          </PanelDescription>
        </HalfPanel>
      </Section>
      <Section background="bg-circle-left">
        <HalfPanel>
          <FlexCentered>
            <Image image={simpleUI} alt="simple UI" />
          </FlexCentered>
          <PanelDescription order="left">
            <H1Styles>Simple UI & UX</H1Styles>
            <P>
              Our pre-built form is easy to integrate in your app or website’s
              checkout flow and designed to optimize conversion.
            </P>
          </PanelDescription>
        </HalfPanel>
      </Section>
      <FeaturesGrid />
      <EndCTA title="Ready to start?" alignForm="flex-end" />
    </>
  )
}

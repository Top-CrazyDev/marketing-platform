import React from "react"

import TopBackgroundCicle from "../components/structural/TopBackgroundCircle"
import Section from "../components/structural/Section"
import HalfPanel from "../components/structural/HalfPanel"
import PanelDescription from "../components/structural/PanelDescription"
import HeroSection from "../components/structural/HeroSection"
import HeaderH2 from "../components/structural/HeaderH2"
import FormLong from "../components/structural/FormLong"
import CompaniesGrid from "../components/pageComponents/CompaniesGrid"
import EndCTA from "../components/pageComponents/EndCTA"

export default function Contact() {
  return (
    <>
      <TopBackgroundCicle>
        <Section>
          <HeroSection>
            <HeaderH2>
              Submit a help request and we’ll get in touch shortly.
            </HeaderH2>
          </HeroSection>
        </Section>
        <Section>
          <HalfPanel>
            <PanelDescription>
              <FormLong />
            </PanelDescription>
            <PanelDescription>
              <CompaniesGrid
                color="dark"
                title="Join the thousands of innovators already banking with us"
              />
            </PanelDescription>
          </HalfPanel>
        </Section>
        <EndCTA title="Ready to start?" alignForm="flex-end" />
      </TopBackgroundCicle>
    </>
  )
}

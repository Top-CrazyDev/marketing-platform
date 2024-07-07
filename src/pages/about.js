import React from "react"

import TopBackgroundCicle from "../components/structural/TopBackgroundCircle"
import Section from "../components/structural/Section"
import HeroSection from "../components/structural/HeroSection"
import HeaderH2 from "../components/structural/HeaderH2"
import H3Heading from "../components/structural/H3Heading"
import P from "../components/structural/Paragraph"
import OneTwoThirdsPanel from "../components/structural/OneTwoThirdsPanel"
import Image from "../components/structural/Image"
import CompanyNumbers from "../components/pageComponents/CompanyNumbers"
import EndCTA from "../components/pageComponents/EndCTA"

import TeamImage from "../assets/images/image-team-members.jpg"

export default function About() {
  return (
    <>
      <TopBackgroundCicle>
        <Section>
          <HeroSection>
            <HeaderH2>
              We empower innovators by delivering access to the financial system
            </HeaderH2>
          </HeroSection>
        </Section>
        <Section>
          <OneTwoThirdsPanel>
            <div>
              <H3Heading>Our Vision</H3Heading>
            </div>
            <div>
              <P maxWidth="620px" textAlign="left" marginBottom="0px">
                Our main goal is to build beautiful consumer experiences along
                with developer-friendly infrastructure. The result is an
                intelligent tool that gives everyone the ability to create
                amazing products that solve big problems. We are deeply focused
                on democratizing financial services through technology.
              </P>
            </div>
          </OneTwoThirdsPanel>
        </Section>
        <Section>
          <OneTwoThirdsPanel>
            <div>
              <H3Heading>Our Business</H3Heading>
            </div>
            <div>
              <P maxWidth="620px" textAlign="left" marginBottom="0px">
                At the core of our platform is the technical infrastructure APIs
                that connect consumers. Our innovative product provides key
                insights for businesses and individuals, as well as robust
                reporting for traditional financial institutions and developers.
              </P>
            </div>
          </OneTwoThirdsPanel>
        </Section>
        <Image
          image={TeamImage}
          alt="team"
          marginTop={"32px"}
          marginBottom={"32px"}
        />
        <CompanyNumbers />
        <Section>
          <OneTwoThirdsPanel>
            <div>
              <H3Heading>The Culture</H3Heading>
            </div>
            <div>
              <P maxWidth="620px" textAlign="left" marginBottom="0px">
                We strongly believe there's always an opportunity to learn from
                each other outside of day-to-day work, whether it's company-wide
                offsites, internal hackathons, or co-worker meetups. We always
                value cross-team collaboration and diversity of thought, no
                matter the job title.
              </P>
            </div>
          </OneTwoThirdsPanel>
        </Section>
        <Section>
          <OneTwoThirdsPanel>
            <div>
              <H3Heading>The People</H3Heading>
            </div>
            <div>
              <P maxWidth="620px" textAlign="left" marginBottom="0px">
                We're all passionate about building a more efficient and
                inclusive financial infrastructure together. At PayAPI, we have
                diverse backgrounds and skills.
              </P>
            </div>
          </OneTwoThirdsPanel>
        </Section>
        <EndCTA title="Ready to start?" />
      </TopBackgroundCicle>
    </>
  )
}

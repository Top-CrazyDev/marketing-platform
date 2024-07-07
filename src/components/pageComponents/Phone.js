import React from "react"

import styled from "styled-components"

import phone from "../../assets/images/phone.svg"

const PhoneStyles = styled.img`
  width: 300px;
`

const Phone = () => {
  return <PhoneStyles src={phone} alt="" />
}

export default Phone

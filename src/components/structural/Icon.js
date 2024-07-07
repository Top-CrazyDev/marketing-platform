import React from "react"

import styled from "styled-components"

const IconStyles = styled.img`
  width: ${props => props.width || "100%"};
`

const Icon = ({ image, alt, width }) => {
  return <IconStyles src={image} alt={alt} width={width} />
}

export default Icon

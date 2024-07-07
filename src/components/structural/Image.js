import React from "react"

import styled from "styled-components"

const ImageStyles = styled.img`
  width: 100%;
  height: 100%;
  margin-top: ${props => props.marginTop || "0"};
  margin-bottom: ${props => props.marginBottom || "0"};
  margin-left: ${props => props.marginLeft || "0"};
  margin-right: ${props => props.marginRight || "0"};
`

const Image = ({
  image,
  alt,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
}) => {
  return (
    <ImageStyles
      src={image}
      alt={alt}
      marginTop={marginTop}
      marginRight={marginRight}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
    />
  )
}

export default Image

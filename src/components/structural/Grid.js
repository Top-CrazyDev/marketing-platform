import React from "react"

import styled from "styled-components"

const GridStyles = styled.div`
  display: grid;
`

const Grid = ({ children, gridColumns }) => {
  return <GridStyles gridColumns={gridColumns}>{children}</GridStyles>
}

export default Grid

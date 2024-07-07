import React from "react"
import Layout from "./src/components/structural/Layout"

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)

export const onRenderBody = ({ setBodyAttributes }) => {
  setBodyAttributes({
    className: "no-js",
  })
};

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "./src/css/materialize.min.css"
import "./src/css/custom-css.css"
import React from "react"

import { AppProvider } from "./src/context/SiteContext"

export const wrapRootElement = ({ element }) => {
  return <AppProvider>{element}</AppProvider>
}

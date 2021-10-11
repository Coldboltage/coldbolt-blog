/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import "./src/css/materialize.min.css"
import "./src/css/custom-css.css"
import React from "react"

import {AppProvider} from "./src/context/SiteContext"

export const wrapRootElement = ({element}) => {
    <AppProvider>{element}</AppProvider>
}
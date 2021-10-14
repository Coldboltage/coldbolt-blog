/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import { AppContext } from "../context/SiteContext"
import * as styles from "../css/dark.module.css"

const Layout = ({ children }) => {
  return (
    <AppContext.Consumer>
      {context => (
        <>
          <Header />
          {console.log(`Darkmode is set to: ${context.darkMode}`)}
          {console.log(
            `localStorage is set to ${
              typeof window !== "undefined"
                ? localStorage.getItem("dark")
                : "Can't render"
            }`
          )}
          <main
            style={{ paddingTop: "40px", paddingBottom: "40px" }}
            className={`${context.darkMode === true && styles.dark} pageHeight`}
          >
            {children}
          </main>
          <footer className="page-footer black">
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </footer>
        </>
      )}
    </AppContext.Consumer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

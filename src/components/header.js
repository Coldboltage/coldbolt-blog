import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <nav className="black">
      <div className="nav-wrapper container">
        <Link to="/" className="brand-logo">Coldbolts Blog</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/blog">Blog</Link></li>
          <li><a href="https://twitter.com/itscoldbolt">Twitter</a></li>
          <li><a href="https://coldboltseo.com">ColdboltSEO</a></li>
          <li><a href="https://github.com/Coldboltage/">Github</a></li>
        </ul>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

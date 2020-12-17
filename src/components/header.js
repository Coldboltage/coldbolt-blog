import React from 'react'
import { Link } from "gatsby"

const header = () => {
    return (
        <div>
            <div className="navBar">
                <div className="container flex">
                    <div className="leftSide">
                        <Link to="/" className="brand-logo">Coldbolts Blog</Link>
                    </div>
                    <div className="rightSide">
                        <ul id="rightLinks">
                            <li><Link to="/blog">Blog</Link></li>
                            <li className="nav-link"><a href="https://twitter.com/itscoldbolt">Twitter</a></li>
                            <li className="nav-link"><a href="https://coldboltseo.com">ColdboltSEO</a></li>
                            <li className="nav-link"><a href="https://github.com/Coldboltage/">Github</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default header

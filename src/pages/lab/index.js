import React from 'react'
import {Link} from "gatsby"
import SEO from "../../components/seo"
import Layout from "../../components/layout"

const Lab = () => {
    return (
        <Layout>
            <SEO title="Lab" description="This is where I test the stuff that I think I can make work for the site. I have no idea what I'm doing here"></SEO>
            <div className="container" id="page-container">
                <h1 className="blog-title">The Lab</h1>
            {/* </div>
            <div className="container "> */}
                <ul>
                    <li>
                        <Link to="/lab/axios-api">Axios API</Link>
                        <p>I haven't done API stuff for ages so I'm going to have to give this a shot right?</p>
                    </li>
                    <li>
                        <Link to="/lab/wordpress-source">Wordpress source</Link>
                        <p>I'm going to try to figure out how to source posts from my ColdboltSEO site. Should be interesting</p>
                    </li>
                </ul>
            </div>
        </Layout>
    )
}

export default Lab
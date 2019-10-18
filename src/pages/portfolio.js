import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const Portfolio = () => (
  <Layout>
  <SEO title="Portfolio" />
    <main>
      <h1>Portfolio</h1>
      <p>This will basically provide links to each deployed project and/or their GitHub</p>
      <Link to="/">Go back to the homepage</Link>
    </main>
  </Layout>

)

export default Portfolio;

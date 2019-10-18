import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Placeholder for landing page</h1>
    <p>Welcome message for visitors to my site</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image /> {/*will be replaced*/}
    </div>
    <div>
      <ul>
        <Link to="/about">About Me</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/blog">Blogs</Link>
      </ul>
    </div>
  </Layout>
)

export default IndexPage

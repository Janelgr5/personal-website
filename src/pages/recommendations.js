import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Recommendations = () => (
  <Layout>
    <SEO title="recommendations" />
    <h1>Placeholder for Title</h1>
    <p>list links to recommended resources related to tech</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Recommendations

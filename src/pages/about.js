import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const AboutPage = () => (
  <Layout>
    <SEO title="About Me" />
    <main>
      <h1>Placeholder for About Me title</h1>
      <p>Placeholder for my pitch or maybe even a video</p>
      <Link to="/">Go back to the homepage</Link>
    </main>
  </Layout>

)

export default AboutPage;

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const Blog = () => (
  <Layout>
    <SEO title="Blog" />
    <main>
      <h1>Blog</h1>
      <p>Eventually this page will link to my Medium blog. Maybe this page will list different publications or trending blog posts</p>
      <Link to="/">Go back to the homepage</Link>
    </main>
  </Layout>
)

export default Blog;

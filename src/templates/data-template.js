import React from "react"

export default ({ pageContext: { data } }) => (
  <section>
    {data.title} - {data.articleURL}
  </section>
)

import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import image from "../images/personal-site.svg"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`daniel`, `mata`, `site`]} />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <img src={image} alt="in-construction" />
    </div>
    <h1>Hello there</h1>
    <p>if you are seeing this page, it means the owner of this page is probably procastinating</p>
    <p>Hopefully doing something productive, if you want to reach him, you can <a href={"https://twitter.com/danielmata__"}> tweet</a> or <a href="mailto:damata1592@example.com">send him an email</a></p>
  </Layout>
)

export default IndexPage

import React from "react"
// import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import AboutMeSection from "./aboutme"
import ContactSection from "./contactme"
import ProjectsSection from "./projects"

export default class MainPage extends React.Component {
  render() {
    return <Layout>
      <SEO title="Home" />
      <AboutMeSection/>
      <ProjectsSection/>
      <ContactSection/>
      {/* <Link to="/page-2/">Go to page 2</Link> */}
    </Layout>
  }
}
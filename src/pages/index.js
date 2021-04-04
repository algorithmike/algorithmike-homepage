import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Schools from "../components/Schools"


export default ({data}) => {
  const {allStrapiProjects: {nodes: projects}} = data;
  console.log(projects)

  return (
    <Layout>
      <Hero/>
      <Services/>
      <Jobs/>
      <Schools/>
      <Projects projects={projects} title="Featured Projects" showLink/>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
      nodes {
        description
        featured
        github
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        id
        stack {
          id
          title
        }
      }
    }
  }
`
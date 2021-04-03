import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"

const ProjectsPage = ({data: {allStrapiProjects: {nodes: projects}}}) => {
  return <Layout>
    <section className="projects-page">
      <Projects projects={projects} title="Projects"/>
    </section>
  </Layout>
}

export const query = graphql`
  {
    allStrapiProjects {
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

export default ProjectsPage
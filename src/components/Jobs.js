import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJobs(sort: {fields: strapiId, order: ASC}) {
      nodes {
        company
        position
        date
        job_description {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query);
  const {allStrapiJobs: {nodes: jobs}} = data;
  const [index, setIndex] = React.useState(0);
  const {company, position, date, job_description} = jobs[index];

  console.log(jobs[index])
  return (
    <section className="section jobs">
      <Title title="Experience"></Title>
    </section>
  )
}

export default Jobs

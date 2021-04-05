import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJobs (sort: {fields: strapiId, order: ASC}) {
      nodes {
        strapiId
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

  return (
    <section className="section jobs">
      <Title title="Experience"></Title>
      <div className="jobs-center">
        {/* btn container */}
          <div className="btn-container">
            {jobs.map((job, mapIndex) => {
              return(
                <button 
                  key={job.strapiId}
                  onClick={() => {setIndex(mapIndex)}}
                  className={`job-btn ${mapIndex === index && 'active-btn'}`}>
                    {job.company}
                </button>
              )
            })}
          </div>
        {/* job info */}
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {
            job_description.map(item => {
              return (
                <div key={item.id} className="job-desc">
                  <FaAngleDoubleRight className="job-icon"/>
                  <p>{item.name}</p>
                </div>
              )
            })
          }
        </article>
      </div>
      <Link to="/about" className="btn center-btn">More Info</Link>
    </section>
  )
}

export default Jobs

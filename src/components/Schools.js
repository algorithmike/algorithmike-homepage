import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiSchools(sort: {fields: strapiId, order: ASC}) {
      nodes {
        strapiId
        school
        major
        date
        description {
          id
          name
        }
      }
    }
  }
`

const Schools = () => {
  const data = useStaticQuery(query);
  const {allStrapiSchools: {nodes: schools}} = data;
  const [index, setIndex] = React.useState(0);
  const {school, major, date, description} = schools[index];

  return (
    <section className="section jobs">
      <Title title="Education"></Title>
      <div className="jobs-center">
        {/* btn container */}
          <div className="btn-container">
            {schools.map((item, mapIndex) => {
              return(
                <button 
                  key={item.strapiId}
                  onClick={() => {setIndex(mapIndex)}}
                  className={`job-btn ${mapIndex === index && 'active-btn'}`}>
                    {item.school}
                </button>
              )
            })}
          </div>
        {/* job info */}
        <article className="job-info">
          <h3>{major}</h3>
          <h4>{school}</h4>
          <p className="job-date">{date}</p>
          {
            description.map(item => {
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

export default Schools

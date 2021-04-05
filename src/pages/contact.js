import React from "react"
import Layout from "../components/Layout"

const contact = () => {
  return (
    <Layout>
      <section className="contact-page">
        <article className="contact-form">
          <h3>Contact Me</h3>
          <div className="form-group">
            <input type="name" className="form-control" placeholder="name"/>
            <input type="email" className="form-control" placeholder="email"/>
            <textarea name="messages" rows="5" placeholder="message" className="form-control"/>
          </div>
          <button type="submit" className="submit-btn btn">Submit Message</button>
        </article>
      </section>
    </Layout>
  )
}

export default contact

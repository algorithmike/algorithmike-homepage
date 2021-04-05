import React from "react"
import Layout from "../components/Layout"

const contact = () => {
  return (
    <Layout>
      <section className="contact-page">
        <article className="contact-form">
          <h3>Contact Me</h3>
          <form action="https://formspree.io/f/xayayebr" method="POST">
            <div className="form-group">
              <input name="name" type="name" className="form-control" placeholder="name"/>
              <input name="email" type="email" className="form-control" placeholder="email"/>
              <textarea name="messages" rows="5" placeholder="message" className="form-control"/>
            </div>
            <button type="submit" className="submit-btn btn">Submit Message</button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact

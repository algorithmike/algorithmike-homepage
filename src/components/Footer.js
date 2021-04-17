import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links" />
        <h4>
          Built with{" "}
          <a href="https://reactjs.org/" target="_blank">
            React
          </a>{" "}
          and{" "}
          <a href="https://www.gatsbyjs.com/" target="_blank">
            Gatsby
          </a>
        </h4>
        <p>
          Check out the{" "}
          <a
            href="https://github.com/algorithmike/algorithmike-homepage"
            target="_blank"
          >
            code repository
          </a>{" "}
          on Github
        </p>
      </div>
    </footer>
  )
}

export default Footer
